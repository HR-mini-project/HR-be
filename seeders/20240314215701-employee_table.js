'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('employees',[
            {
                nip : '111111111',
                nama : "Habils",
                email : "habil@gmail.com",
                position : "Fullstack Developer",
                password : '123',
                departement_id : 2,
                authorization_id : 1,
                employees_document_id: null,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nip : '222222222',
                nama : "Wakwaw",
                email : "wakwaw@gmail.com",
                position : "Copy writer",
                password : '123',
                departement_id : 1,
                authorization_id : 2,
                employees_document_id: null,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                nip : '333333333',
                nama : "cepi",
                email : "cepi@gmail.com",
                position : "Backend Engineer",
                password : '123',
                departement_id : 2,
                authorization_id : 1,
                employees_document_id: null,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ])
 },

  async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('employees', [], {})
  }
};
