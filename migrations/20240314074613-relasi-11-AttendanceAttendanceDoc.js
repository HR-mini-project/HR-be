'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
            await queryInterface.addColumn("attendance_documents", "attendance_id", {
                type: Sequelize.INTEGER,
            })
            await queryInterface.addConstraint("attendance_documents", {
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
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
        await queryInterface.removeColumn('attendance_document', 'attendances_id')
  }
};
