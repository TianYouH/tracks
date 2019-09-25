import http from '../../http';
import * as baseConfig from './config';

// 获取用户信息
const GET_USERINFO_API = function(params) {
  const { url, method, config } = baseConfig.GET_USERINFO_CONFIG;
  return new Promise((resolve, reject) => {
    http({
      url,
      method,
      ...config, // 自定义配置
      params
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
