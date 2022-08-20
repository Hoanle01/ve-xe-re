'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert(
    'users', [{
         name:"Hoang",
         email:"hoang@gmail.com",
         password:"2910",
         numberPhone:"098751515",
         avatar:"https://gravatar.com/avatar/2e59c55d9c750c6c230d6f1797afb06a",
         type:"ADMIN",
         createdAt:"2022-07-28 09:55:00",
         updatedAt:"2022-07-28 09:55:00",
      },
      {
        name:"Hoan",
        email:"hoang@gmail.com",
        password:"29102001",
        numberPhone:"098751515",
        avatar:"https://gravatar.com/avatar/2e59c55d9c750c6c230d6f1797afb06a",
        type:"ADMIN",
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
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
