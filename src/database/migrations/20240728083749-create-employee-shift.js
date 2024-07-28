'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EmployeeShifts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
        type: Sequelize.INTEGER,
          references: {
            model: "Employees",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
      },
      business_id: {
        type: Sequelize.INTEGER,
          references: {
            model: "Businesses",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
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
    await queryInterface.dropTable('EmployeeShifts');
  }
};