'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('attendances',[
            {
                id:1,
                arrival: new Date(),
                leave : new Date().setHours(new Date().getHours + 9),
                reason : null,
                approval_status_id : 2,
                attendance_status_id : 4,
                nip :'111111111', 
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id:2,
                arrival: new Date(),
                leave : new Date().setHours(new Date().getHours + 9),
                reason : null,
                approval_status_id : 2,
                attendance_status_id : 4,
                nip :'222222222', 
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ])
 },

  async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('attendances', [], {})
      }
};
