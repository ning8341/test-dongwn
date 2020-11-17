/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1605166329902_2739';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  //放开post请求
  config.security = {
    csrf: {
      enable: false,
    }
  }

  config.sequelize = {
    dialect: 'mysql', // l类型
    host: '127.0.0.1', // 地址
    username: 'root', // 账号
    password: '123456', // 密码
    port: 3306, // 端口号
    database: 'blog', // 数据库名称
    dialectOptions: {
      // requestTimeout: 60000,
      // useUTC: false, //for reading from database
      dateStrings: true,
      typeCast: function (field, next) { // for reading from database
        if (field.type === 'DATETIME') {
          return field.string()
        }
        return next()
      },
    },
    timezone: '+08:00'
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  }


  return {
    ...config,
    ...userConfig,
  };
};
