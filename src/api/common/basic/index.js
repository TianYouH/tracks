import httpService from '../../httpService';
import * as baseConfig from './config';

// 获取用户信息
const GET_USERINFO_API = function(config) {
  return new Promise((resolve, reject) => {
    httpService
      .accessAPI({
        apiObj: baseConfig.GET_USERINFO_CONFIG,
        query: config
      })
      .then((res) => {
        if (res.status) {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export {
  GET_USERINFO_API
};
