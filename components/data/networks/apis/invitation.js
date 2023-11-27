import {flow} from 'mobx';
import {requestInvitationUrl} from '../api_endpoints';

const invitationApis = {
  requestInvitation: flow(function () {
    const response = this.sendApiCall(requestInvitationUrl(), {
      email: this.tempObj.email,
    });

    return response;
  }),
};

export default invitationApis;
