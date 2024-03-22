"use strict";


/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
        await queryInterface.bulkInsert("attendances",[
            {
                id: 1,
                arrival: "09:00:00",
                leave: "17:00:00",
                date: "2024-03-20",
                reason: "",
                createdAt: new Date(),
                updatedAt: new Date(),
                nip: "24.0204.135344-8498",
                approval_status_id: 1,
                attendance_status_id: 4,
            },
            {
                id: 2,
                arrival: "08:30:00",
                leave: "16:30:00",
                date: "2024-03-21",
                reason: "Sick leave",
                createdAt: new Date(),
                updatedAt: new Date(),
                nip: "24.0204.135344-8498",
                approval_status_id: 2,
                attendance_status_id: 1,
            },
            {
                id: 3,
                arrival: "10:00:00",
                leave: "18:00:00",
                date: "2024-03-22",
                reason: "",
                createdAt: new Date(),
                updatedAt: new Date(),
                nip: "333333333",
                approval_status_id: 2,
                attendance_status_id: 1,
            },
            {
                id: 4,
                arrival: "08:00:00",
                leave: "16:00:00",
                date: "2024-03-23",
                reason: "",
                createdAt: new Date(),
                updatedAt: new Date(),
                nip: "333333333",
                approval_status_id: 2,
                attendance_status_id: 4,
            },
            {
                id: 5,
                arrival: "09:30:00",
                leave: "17:30:00",
                date: "2024-03-24",
                reason: "",
                createdAt: new Date(),
                updatedAt: new Date(),
                nip: "333333333",
                approval_status_id: 2,
                attendance_status_id: 4,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("attendances", null, {});
    },
};
