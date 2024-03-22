'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
            return queryInterface.bulkInsert('departements',[
            {
                id:1,
                name: "Digital Marketing",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id:2,
                name: "Software Engineer",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id:3,
                name: "Designer",
                createdAt: new Date(),
                updatedAt: new Date(),
            },

            {
                id:4,
                name: "Human Resource",
                createdAt: new Date(),
                updatedAt: new Date(),
            }

        ])
  },

  async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('departements', null, {})
 }
};
