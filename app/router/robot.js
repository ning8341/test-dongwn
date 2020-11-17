module.exports = ({ router, controller }) => { 
  router.get("robot",'/api/robot/:msg', controller.robot.chat);
}