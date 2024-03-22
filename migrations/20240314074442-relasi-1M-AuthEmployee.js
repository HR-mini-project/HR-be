'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        
           await queryInterface.addColumn("employees", "authorization_id", {
                type: Sequelize.INTEGER,
            })
            await queryInterface.addConstraint("employees", {
                fields: ["authorization_id"],
                type: "foreign key",
                name: "FK_authId",
                references: {
                    table: "authorizations",
                    field: "id",
                },
            })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn("employees", "authorization_id");
    },
};
