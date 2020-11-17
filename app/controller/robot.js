const Controller = require('egg').Controller;

class RobotController extends Controller {

  async chat() {
    const { msg } = this.ctx.params
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>',msg)
    let res = await this.ctx.curl('http://api.qingyunke.com/api.php?key=free&appid=0&msg=' + encodeURI(msg), { dataType: 'json' })
    let content = res.res.data.content
    this.ctx.body = {
      object: content,
      meta: 'robot'
    }
  }


}
module.exports = RobotController;