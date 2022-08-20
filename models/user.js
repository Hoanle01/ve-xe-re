'use strict';
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
    static associate({Ticket}) {
      // define association here
      //kết nối database với nhau
      this.hasMany(Ticket,{foreignKey:'user_id'})
      
    }
  }
  User.init({
    name: {
      type:DataTypes.STRING,
    },
    email: {
     type: DataTypes.STRING
    },
    password:{ 
     type: DataTypes.STRING
    },
    numberPhone: {
     type: DataTypes.STRING
    },
    avatar:DataTypes.STRING,
    type:{ 
     type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};