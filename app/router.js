'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //router.get('/list', controller.user.index);
  
  require('./router/dongwn')(app);
};
