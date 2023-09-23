"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "crudts",
      [
        {
          provinces: "Jabar",
          city: "Cilacap",
          sub_district: "Wanareja",
          village: "Limbangan",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('crudts', null, {});
  },
};
