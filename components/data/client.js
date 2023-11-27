import axios from 'axios';
import {apiBaseURL, getData} from './lib/utils';
import {isEmpty} from 'lodash';

const axiosObj = () => {
  const instance = axios.create({
    baseURL: apiBaseURL(),
    headers: {
      Accept: 'application/json',
      'cache-control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    async config => {
      let headers = {};

      await getData('accessToken').then(value => {
        if (!isEmpty(value)) {
          headers = {
            ...config.headers,
            'x-auth-token': value,
          };
        }
      });

      if (!isEmpty(headers)) {
        config.headers = headers;
      }
      return config;
    },
    error => Promise.reject(error),
  );

  instance.interceptors.response.use(
    response => response,
    responseErrors => {
      return Promise.reject(responseErrors);
    },
  );

  return instance;
};

export default axiosObj();
