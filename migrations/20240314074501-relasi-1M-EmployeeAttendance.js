'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
            queryInterface.addColumn("attendances", "nip", {
                type: Sequelize.STRING,
            })
            queryInterface.addConstraint("attendances", {
                fields: ["nip"],
                type: "foreign key",
                name: "FK_nip",
                references: {
                    table: "employees",
                    field: "nip",
                },
            })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn("attendances", "nip");
  }
};
