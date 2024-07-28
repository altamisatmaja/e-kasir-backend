'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_name: {
        type: Sequelize.STRING
      },
      total_amount: {
        type: Sequelize.INTEGER
      },
      cash_received: {
        type: Sequelize.INTEGER
      },
      change_due: {
        type: Sequelize.INTEGER
      },
      sale_date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Orders');
  }
};