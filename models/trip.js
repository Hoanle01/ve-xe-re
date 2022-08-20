'use strict';
const {Model} = require('sequelize');
const passengercarcompanies = require('./passengercarcompanies');
module.exports = (sequelize, DataTypes) => {
  class trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Station,Ticket,passengerCarCompanies}) {
      // define association here
      this.belongsTo(Station,{foreignKey:"fromStation",as:"from"})
      this.belongsTo(Station,{foreignKey:"toStation",as:"to"})
      // this.hasMany(Ticket,{foreignKey:'trip_id',as:""})
      // this.hasMany(passengercarcompanies,{foreignKey:'trip_id',as:""})
    }
  }
  trip.init({
    startTime: DataTypes.DATE,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'trip',
  });
  return trip;
};