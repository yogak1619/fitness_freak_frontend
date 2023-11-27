import {
  action,
  flow,
  computed,
  extendObservable,
  makeObservable,
  observable,
} from 'mobx';
import {each, filter, find, includes, isEmpty, uniqBy} from 'lodash';

import client from '../client';
import updatable from '../concerns/updatable';
import {Alert} from 'react-native';

class BaseStore {
  rootStore;
  client;
  Entity;
  @observable records = [];
  @observable fetching = false;
  @observable fetched = false;
  @observable isInternetConnected = false;
  @observable navigateToScreen = null;
  @observable firstTimeTraverse = true;
  @observable errors = observable(new Map());

  
  constructor(rootStore, entity) {
    makeObservable(this);
    this.rootStore = rootStore;
    this.client = client;
    this.Entity = entity;

    extendObservable(this, updatable);
  }

  getById = (data, id) => this.getByParams(data, {id});

  getByParams = (data, params) => find(data ? data : this.records, params);

  getMultipleByParams = params => filter(this.records, params);

  getMultipleById = ids => filter(this.records, r => includes(ids, r.id));

  @computed
  get filteredRecords() {
    return this.records;
  }

  @computed
  get hasRecords() {
    return !isEmpty(this.records);
  }

  @action
  addRecord(record) {
    const obj = new this.Entity(record, this);

    this.records = uniqBy(
      [...this.records, new this.Entity(record, this)],
      'id',
    );

    return obj;
  }

  @action
  updateAttributeValue = (key, val) => {
    this[key] = val;
  };

  @action
  addOrUpdateAllRecords(newRecords, replace = false) {
    if (replace) {
      this.records = [];
    }
    newRecords.forEach(element => {
      this.records.push(new this.Entity(element, this));
    });
  }

  @action
  parseResponseErrors(errorData) {
    this.errors = observable(new Map());
    let objectErrors = this.errors;

    if (errorData.status === 500) {
      this.errors = errorData.message || errorData.error;
      return;
    }

    if (errorData) {
      if (Array.isArray(errorData)) {
        this.errors = errorData;
      } else {
        each(errorData, function (value, key) {
          objectErrors.set(key, value);
        });
      }
    } else {
      this.errors = errorData.message || errorData.error;
      Alert.alert(this.errors);
    }
    return errorData;
  }

  @flow
  *sendApiCall(url, params, errorCatchCallBack = null) {
    this.fetching = true;
    this.errors = observable(new Map());

    return yield this.client.post(url, params).catch(responseErrors => {
      if (responseErrors.status === 401) {
        this.isUserLogOut = false;
      } else {
        if (errorCatchCallBack) {
          errorCatchCallBack(this, responseErrors);
        } else {
          const errors = responseErrors;
          Alert.alert('error: ' + JSON.stringify(errors));
          this.parseResponseErrors(isEmpty(errors) ? responseErrors : errors);
        }
        this.fetching = false;
      }
    });
  }
}

export default BaseStore;
