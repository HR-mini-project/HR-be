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
            await queryInterface.addColumn("attendances", "approval_status_id", {
                type: Sequelize.INTEGER,
            })
            await queryInterface.addConstraint("attendances", {
                fields: ["approval_status_id"],
                type: "foreign key",
                name: "FK_approval_status",
                references: {
                    table: "approval_statuses",
                    field: "id",
                },
            })
  },

  async down (queryInterface, Sequelize) {
        await queryInterface.removeColumn('attendances', "approval_status_id")
  }
};
