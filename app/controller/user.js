const Controller = require('egg').Controller;
const uuid = require('uuid')

class UserController extends Controller {
  /**
* @api {get} /api/user 用户列表信息获取
* @apiGroup user
* @apiParam {String} targetType 
* @apiParam {String} fileName
* @apiParam {String} fileSize
* @apiParam {String} fileExt
* @apiParam {String} fileType
* @apiParam {String} encodedFileName
* @apiParam {Number} [page=1]
* @apiParam {Number} [pageSize=20]
*/

  /**
   * @api {get} path /api/user/:id
   * @apiName 根据id获取用户信息
   * @apiGroup user                      
   * 
   */
  async index() {
    const users = await this.ctx.model.User.findAll()
    this.ctx.body = {
      object: users,
      meta: '列表'
    }
  }

  //根据id查询
  async show() {
    const { id } = this.ctx.params
    const userObject = await this.ctx.model.User.findByPk(id)
    this.ctx.body = {
      object: userObject,
      meta: '根据id查询'
    }
  }

  async create() {
    let result, transaction
    try {
      transaction = await this.ctx.model.transaction()
      const data = this.ctx.request.body
      if (!data.id) {
        data.id = uuid.v1()
      }
      result = await this.ctx.model.User.create(data, { transaction })
      await transaction.commit()
    } catch (e) {
      result = e
      await transaction.rollback()
    }
    this.ctx.body = {
      object: result,
      meta: '创建&开启事务'
    }

  }
  //修改
  async update() {
    const data = this.ctx.request.body
    const { id } = this.ctx.params
    const result = await this.ctx.model.User.update(data, { where: { id } })
    this.ctx.body = {
      object: result,
      meta: '修改'
    }

  }
  //删除
  async destroy() {
    const { id } = this.ctx.params
    const ids = id.split(',');
    const result = await this.ctx.model.User.destroy({ where: { id: ids } })

    this.ctx.body = {
      object: result,
      meta: '删除'
    }
  }

  /**
   * 分页查询测试用例
   */
  async getUserCountList() {
    const result = await this.ctx.model.User.findAndCountAll({
      where: {
        id: [16, 155]
      }
    })
    this.ctx.body = {
      object: result,
      meta: '删除'
    }
  }



}
module.exports = UserController;
