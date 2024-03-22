"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
            await queryInterface.addColumn('employees','employees_document_id',{
                type : Sequelize.INTEGER
            })
            await queryInterface.addConstraint('employees', {
                fields: ['employees_document_id'],
                type : 'foreign key',
                name : 'FK_employees_document_id',
                references : {
                    table : "employee_documents",
                    field : "id"
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
        await queryInterface.removeColumn('employees', 'employees_document_id')
  }
};
