'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * 
    */
   await queryInterface.bulkInsert('Tickets', [{
        trip_id:22,
        user_id:11,
        createdAt:"2022-07-28 09:55:00",
        updatedAt:"2022-07-28 09:55:00",
      },{
        trip_id:23,
        user_id:12,
        createdAt:"2022-07-28 09:55:00",
        updatedAt:"2022-07-28 09:55:00",
      },
      {
        trip_id:24,
        user_id:11,
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
     * 
     */await queryInterface.bulkDelete('Tickets', null, {});
  }
};
