'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
            await queryInterface.addColumn("attendances", "attendance_status_id", {
                type: Sequelize.INTEGER,
            })
            await queryInterface.addConstraint("attendances", {
                fields: ["attendance_status_id"],
                type: "foreign key",
                name: "FK_attendance_id",
                references: {
                    table: "attendances",
                    field: "id",
                },
            })
            
  },

  async down (queryInterface, Sequelize) {
        return queryInterface.removeColumn('attendances', "attendance_status_id")
  }
};
