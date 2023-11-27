import {action} from 'mobx';
import {camelCase, map} from 'lodash';

const updatable = {
  initialize: action(function (params) {
    this.update(params);
  }),
  update: action(function (params) {
    map(
      Object.keys(params),
      function (k) {
        this[camelCase(k)] = params[k];
      }.bind(this),
    );
  }),
};

export default updatable;
