import axios from 'axios';
import { Toast } from 'antd-mobile';

// 创建一个axios实例
const service = axios.create({
  // baseURL: 'http://127.0.0.1:8080', // 存在一些场景，借口一部分调这个地址一部分调另外一个地址
  // timeout: 5000, // 超时时间
  withCredentials: true // 允许携带cookie
});

// 请求发送处理
service.interceptors.request.use(
  (config) => {
    // console.log(config)
    // 可以对用户权限进行请求进行拦截 Promise.reject(error)
    // 在发送请求做一些事情
    Toast.loading('Loading...', 0);
    return config;
  },
  (error) => {
    // 发送请求失败报错
    // console.log('err' + error) // for debug
    // Toast({
    //   message: error.message,
    //   duration: 5 + 1000
    // });
    Toast.hide();
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (!res.status) {
      // 前后端分离，泰坦框架1.8.6以上。使用这段代码替换上面302 reload
      const msg = response.data.message;
      if (msg && msg.indexOf('oauth2/authorize') !== -1) {
        window.location.href = msg;
        return;
      }
      // 请求异常
      Toast.hide();
      Toast.fail(res.message, 3);
      return res;
    } else {
      Toast.hide();
      // 请求成功
      return res;
    }
  },
  (error) => {
    console.log(`err${error}`); // for debug
    Toast.hide();
    Toast.fail(error.message, 3);
    return Promise.reject(error);
  }
);

export default service;
