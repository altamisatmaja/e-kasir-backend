'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employee_shifts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      shift_date: {
        type: Sequelize.DATE
      },
      shift_start: {
        type: Sequelize.TIME
      },
      shift_end: {
        type: Sequelize.TIME
      },
      employee_id: {
        type: Sequelize.BIGINT,
          references: {
            model: "employees",
            key: "id",
          },
          onDelete: "CASCADE",
      },
      business_id: {
        type: Sequelize.BIGINT,
          references: {
            model: "businesses",
            key: "id",
          },
          onDelete: "CASCADE",
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('employee_shifts');
  }
};