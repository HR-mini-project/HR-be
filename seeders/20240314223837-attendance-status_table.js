'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('attendance_status',[
            {
                id:1,
                status:"IZIN",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id:2,
                status:"SAKIT",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id:3,
                status:"CUTI",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id:4,
                status:"HADIR",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ])
  },

  async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('attendance_status', [], {})
     }
};
