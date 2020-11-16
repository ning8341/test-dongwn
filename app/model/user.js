module.exports = app => {
  /* model definition */
  const { STRING, INTEGER, DATE, FLOAT, DOUBLE, NOW, UUID, UUIDV1, Op } = app.Sequelize

  const User = app.model.define('User', {
    id: {
      type: UUID,
      primaryKey: true,
      defaultValue: UUIDV1()
    },
    name: {
      field: "name",
      type: STRING(64),
      allowNull: false,
      defaultValue: '',
      validate: {
        notEmpty: { msg: 'name 不能为空' }
      }
    },
    createdAt: {
      field: 'createdAt',
      type: DATE,
      defaultValue: NOW
    },
    updatedAt: {
      field: 'updatedAt',
      type: DATE,
      defaultValue: NOW
    }
  }, {
    tableName: 'user',
    timestamps: false
  })

  /* class methods */
  User.updateById = async function (id, data) {
    return await this.update(data, { where: { id } })
  }

  User.findByUserId = async function (userId) {
    return this.findOne({
      where: {
        userId
      }
    })
  }

  User.findByUserIds = async function (userIds) {
    return this.findAll({
      where: {
        userId: userIds,
      }
    })
  }

  return User
}
