'use strict';
const {Sequelize} = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
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
    }
  }
  Role.init({
    Id: DataTypes.UUID,
    Name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};