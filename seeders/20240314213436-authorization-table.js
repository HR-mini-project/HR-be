'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('authorizations',[
            {
                id:1,
                level:'ADMIN',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id:2,
                level:'EMPLOYEE',
                createdAt: new Date(),
                updatedAt: new Date() 
            },
        ])
  },

  async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('authorizations', null, {})
  }
};
