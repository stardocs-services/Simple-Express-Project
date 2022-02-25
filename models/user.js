'use strict';
const {Sequelize} = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
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
        User.hasMany(UserRole,
          {
            foreignKey: {
              field:'UserId',
              allowNull: false,
            },
          });
      }
  }
  User.init({
    Id: DataTypes.UUID,
    Name: DataTypes.STRING,
    UserName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    PhoneNumber: DataTypes.STRING,
    MobileNumber: DataTypes.STRING,
    DateOfBirth: DataTypes.DATE,
    LockoutEnabled: DataTypes.BOOLEAN,
    LockoutEnd: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};