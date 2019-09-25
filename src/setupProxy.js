// eslint-disable-next-line import/no-extraneous-dependencies
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/zto', {
      target: 'http://127.0.0.1:8080/', // 后台地址
      // target: 'http://10.9.41.71:8080/', // 绩效测试后台地址
      changeOrigin: false,
      secure: false
    })
  );
};
