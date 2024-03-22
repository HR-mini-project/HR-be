'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        return await queryInterface.addConstraint('employees', 
        {
            fields: ["email"],
            type: "unique",
            name: "email_unique",
        }
        )
  },

  async down (queryInterface, Sequelize) {
        return await queryInterface.removeConstraint('employees','email_unique' )
  }
};
