'use strict';
const {Sequelize} = require('sequelize');
const {
  Model
} = require('sequelize');
const Role = require('./role');
const User = require('./user');
module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static init(sequelize) {
      super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      });
      this.addHook('beforeSave', async (user) => {
        return user.id = uuid();
      });
      return this;
    }
    static associate(models) {
      // define association here
      UserRole.hasMany(User,
      {
        onDelete: 'cascade',
        foreignKey: {
          field:'UserId',
          allowNull: false,
        },
      });
      UserRole.hasMany(Role,
      {
        onDelete: 'cascade',
        foreignKey: {
          field:'RoleId',
          allowNull: false,
        },
      });
    }
  }
  UserRole.init({
    Id: DataTypes.UUID,
    UserId: DataTypes.UUID,
    RoleId: DataTypes.UUID,
    TenantId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'UserRole',
  });
  return UserRole;
};