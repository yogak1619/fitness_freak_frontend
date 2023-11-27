import {action, computed, flow, makeObservable, observable} from 'mobx';

import {isEmpty, each} from 'lodash';
import BaseStore from './base_store';
import User from '../entities/user';
import {
  userSignInUrl,
  forgetPasswordUrl,
  resetPasswordUrl,
  verifyTokenUrl,
} from '../networks/api_endpoints';
import {storeData} from '../lib/utils';
import {Alert} from 'react-native';
import jwt_decode from 'jwt-decode';
import {TOKEN} from '../lib/environmentVars';
class UserStore extends BaseStore {
  @observable currentUser = {};
  @observable tempObj = {};
  @observable forgetPasswordMessage = '';
  @observable userToken;

  @observable isApiRequestCompleted = false;
  @observable isUserSignOut = false;
  @observable fetchingCurrentUser = false;
  @observable validCurrentUser = false;

  @observable validateInputs = {};

  constructor(rootStore) {
    super(rootStore, User);

    makeObservable(this);
  }

  @action
  setValidateInputs(inputs) {
    this.validateInputs = inputs;
  }

  @computed
  get userSignedIn() {
    return !isEmpty(this.currentUser);
  }

  @action
  setCurrentUser() {
    var decoded = jwt_decode(TOKEN);

    this.currentUser = new User({
      email: decoded.email,
      name: decoded.name,
      id: decoded._id,
    });
  }

  @action
  initializeTempObj(userInfo = {}) {
    this.validateInputs = {};
    this.errors = observable(new Map());
    this.tempObj = new User(
      {
        email: '',
        name: '',
        phone: '',
        password: '',
        address: '',
        landmark: '',
        city: '',
        country: '',
        state: '',
        pincode: '',
        otp: '',
      },
      this,
    );
  }

  buildCreateUserParams() {
    const user = this.tempObj.objectEntities;
    const formData = new FormData();

    formData.append('avatar', `data:image/jpeg;base64,${user.avatar}`);
    formData.append('username', user.username);
    formData.append('email', user.email);
    formData.append('password', user.password);
    formData.append('password_confirmation', user.confirmPassword);
    formData.append('mobile', user.mobile);

    return formData;
  }

  buildUserSignInParams() {
    return {
      email: this.tempObj.email,
      password: this.tempObj.password,
    };
  }

  @action
  updateFetchCurrentUser(value) {
    this.fetchingCurrentUser = value;
  }

  @action
  setIsApiRequestCompleted(value) {
    this.isApiRequestCompleted = value;
  }

  @flow
  *forgetPassword() {
    this.updateFetchCurrentUser(true);
    this.setIsApiRequestCompleted(false);
    try {
      const response = yield this.sendApiCall(
        forgetPasswordUrl(),
        {
          email: this.tempObj.email,
        },
        this.parseUserSignInErrorResponse,
      );

      if (response.status === 200) {
        this.forgetPasswordMessage = response.data.message;
        this.updateFetchCurrentUser(false);
        this.isApiRequestCompleted = true;
      }
    } catch (e) {
      this.updateFetchCurrentUser(false);
      this.isApiRequestCompleted = true;
    }
  }

  @flow
  *resetPassword() {
    this.updateFetchCurrentUser(true);
    const response = yield this.sendApiCall(resetPasswordUrl(), {
      password: this.tempObj.password,
      otp: this.tempObj.otp,
    });

    if (response?.status === 201) {
      this.forgetPasswordMessage = response.data.message;
      this.updateFetchCurrentUser(false);
    }
  }

  @action
  parseUserSignInErrorResponse(currentStore, errorResponse) {
    currentStore.updateFetchCurrentUser(false);
    if (!isEmpty(errorResponse.response)) {
      const errors = errorResponse.response.data;
      const multipleErrors = errors.errors;

      if (!isEmpty(multipleErrors) && Array.isArray(multipleErrors)) {
        each(multipleErrors, function (value) {
          const message = currentStore.errors.data_.get(value.path)?.value_;
          const formattedMessage = isEmpty(message)
            ? value.msg
            : `${message}, ${value.msg}`;
          currentStore.errors.set(value.path, formattedMessage);
        });
      } else {
        if (errors.message) {
          currentStore.errors.set('loginError', errors.message);
        } else {
          currentStore.errors.set('loginError', errors);
        }
      }
    } else {
      Alert.alert(errorResponse.message);
    }
    currentStore.setIsApiRequestCompleted(true);
  }

  // Login User Api call
  @flow
  *userSignIn() {
    this.updateFetchCurrentUser(true);

    const response = yield this.sendApiCall(
      userSignInUrl(),
      this.buildUserSignInParams(),
      this.parseUserSignInErrorResponse,
    );

    if (response?.status === 200) {
      storeData('accessToken', response.data.token);
      this.setCurrentUser(response.data.token);
      this.userToken = response.data.token;
      this.updateFetchCurrentUser(false);
    }
  }

  @flow
  *verifyUserToken() {
    this.updateAttributeValue('validCurrentUser', false);
    this.updateAttributeValue('isApiRequestCompleted', false);

    try {
      const response = yield this.client.get(verifyTokenUrl());
      if (!isEmpty(response)) {
        this.updateAttributeValue('fetchingCurrentUser', false);
        this.setCurrentUser(response.config.headers['x-auth-token']);
        this.updateAttributeValue('validCurrentUser', response.status === 200);
        this.updateAttributeValue('isApiRequestCompleted', true);
      }
    } catch (e) {
      this.updateAttributeValue('fetchingCurrentUser', false);
      this.updateAttributeValue('validCurrentUser', false);
      this.updateAttributeValue('isApiRequestCompleted', true);
      storeData('accessToken', '');
    }
  }
}

export default UserStore;
