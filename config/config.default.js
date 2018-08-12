'use strict';
const path = require('path');
module.exports = appInfo => {
  const config = exports = {};
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1533800705722_5320';

  // add your config here
  config.middleware = [];

  exports.security = {
    xframe: {
      enable: false,
    },
    csrf: {
      cookieName: 'XSRF-TOKEN', // Cookie 中的字段名，默认为 csrfToken
      headerName: 'X-XSRF-TOKEN',
    },
  };

  exports.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'survey',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };


  return config;
};
