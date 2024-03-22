'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('approval_statuses',[
            {
                id:1,
                approval_status: "PENDING",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id:2,
                approval_status: "ACCEPTED",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id:3,
                approval_status: "REJECTED",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ])
 },

  async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('approval_statuses', [], {})
  }
};
