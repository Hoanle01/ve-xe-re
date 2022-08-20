'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * 
    */
   await queryInterface.bulkInsert(
    'trips', [
      {
        fromStation: 28,
        toStation: 30,
        price:200000,
        startTime:"2022-06-13 08:30:00",
        createdAt:"2022-07-28 09:55:00",
        updatedAt:"2022-07-28 09:55:00",
      },
      {
        fromStation: 28,
        toStation:29,
        price:500000,
        startTime:"2022-06-13 0:30:00",
        createdAt:"2022-07-28 09:55:00",
        updatedAt:"2022-07-28 09:55:00",
      },{
        
          fromStation: 30,
          toStation:31,
          price:550000,
          startTime:"2022-06-13 0:30:00",
          createdAt:"2022-07-28 09:55:00",
          updatedAt:"2022-07-28 09:55:00",
        
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});\
     */

     await queryInterface.bulkDelete('trips', null, {});
  }
};
