module.exports = ({ router, controller }) => {
  
  router.get('/api/getUserCountList', controller.user.getUserCountList);

  /* RESTful CRUD routes */
  router.resources('user', '/api/user', controller.user)

}