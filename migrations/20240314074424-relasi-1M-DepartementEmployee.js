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
            await queryInterface.addColumn('employees','departement_id',{
                type : Sequelize.INTEGER
            })
            await queryInterface.addConstraint('employees', {
                fields: ['departement_id'],
                type : 'foreign key',
                name : 'FK_department_id',
                references : {
                    table : "departements",
                    field : "id"
                },
            })
  },

  async down (queryInterface, Sequelize) {
        await queryInterface.removeColumn('employees','departement_id')
  }
};
