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
     await queryInterface.bulkInsert('stations', 
     [{
        name: 'Bến xe Miền Tây',
        address:"Kinh Dương Vương",
        province:"HCM",
        createdAt:"2021-04-26 07:06:14",
        updatedAt:"2021-04-26 07:06:14"
      },{
        name: 'Bến xe Đà Nẵng',
        address:"Tôn Đức Thắng",
        province:"DN",
        createdAt:"2021-04-26 07:06:14",
        updatedAt:"2021-04-26 07:06:14"
      },{
        name: 'Bến xe Miền Đông',
        address:"Bình Thạnh",
        province:"HCM",
        createdAt:"2021-04-26 07:06:14",
        updatedAt:"2021-04-26 07:06:14"
      },{
        name: 'Bến xe xuân Truyền',
        address:"Quảng Bình",
        province:"HN",
        createdAt:"2021-04-26 07:06:14",
        updatedAt:"2021-04-26 07:06:14"
      },
    
    
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('stations', null, {});
  }
};
