import {flow} from 'mobx';
import {registerUserUrl} from '../api_endpoints';
import User from '../../entities/user';

const createProfileApis = {
  registerUser: flow(function () {
    const response = this.sendApiCall(
      registerUserUrl(),
      this.buildCreateUserParams(),
    );

    if (response?.status === 201) {
      this.update({currentUser: new User(response.data, this)});
    }
    this.fetchingCurrentUser = false;
  }),
};

export default createProfileApis;
