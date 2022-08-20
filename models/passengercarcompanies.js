'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class passengerCarCompanies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({trip}) {
      this.hasMany(trip,{foreignKey:"fromStation",as:"from"})
      
      // define association here
    }
  }
  passengerCarCompanies.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'passengerCarCompanies',
  });
  return passengerCarCompanies;
};