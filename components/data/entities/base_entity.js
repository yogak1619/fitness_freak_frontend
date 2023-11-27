import {action, extendObservable, makeObservable, observable} from 'mobx';
import {isEmpty} from 'lodash';

import client from '../client';
import updatable from '../concerns/updatable';

class BaseEntity {
  store;
  client;
  @observable dirty = false;
  @observable json = {};

  constructor(value, store) {
    makeObservable(this);

    this.store = store;
    this.client = client;
    this.json = value;

    extendObservable(this, updatable);
  }

  @action
  destroy() {
    if (isEmpty(this.store)) {
      return;
    }

    this.store.records.splice(this.store.records.indexOf(this), 1);
  }
}

export default BaseEntity;
