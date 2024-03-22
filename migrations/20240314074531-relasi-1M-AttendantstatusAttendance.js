'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
            await queryInterface.addColumn("attendance_status", "attendance_id", {
                type: Sequelize.INTEGER,
            })
            await queryInterface.addConstraint("attendance_status", {
                fields: ["attendance_id"],
                type: "foreign key",
                name: "FK_attendance_id",
                references: {
                    table: "attendances",
                    field: "id",
                },
            })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("attendance_status", "attendance_id");
  }
};
