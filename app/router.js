'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/add', controller.home.index);
  router.get('/api/getJson', controller.home.getJson);
  router.get('/*', controller.home.router);
};
