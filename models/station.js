'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({trip}) {
      // define association here
      this.hasMany(trip,{foreignKey:"fromStation",as:"from"})
      this.hasMany(trip,{foreignKey:"toStation",as:"to"})
    }
  }
  Station.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true,
        len:[3,30],

      }
    },
    address: {
      type:DataTypes.STRING,
      validate:{
        checkLen(value){
          if(value.length>=5 && value.length<=20){
            return true;

          }else{
            throw new Error('độ dài phải từ 5->10')
          }
        }
      }
    },
    province:{
      type: DataTypes.STRING,
    allowNull:false,
     validate:{
      isIn:[['HCM','DN','CT',"HP","HN"]]
     }
    
    }
  }, {
    sequelize,
    modelName: 'Station',
  });
  return Station;
};