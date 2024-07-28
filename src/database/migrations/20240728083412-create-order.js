"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      customer_name: {
        type: Sequelize.STRING(20),
      },
      total_amount: {
        type: Sequelize.INTEGER,
      },
      cash_received: {
        type: Sequelize.INTEGER,
      },
      change_due: {
        type: Sequelize.INTEGER,
      },
      sale_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
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
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("orders");
  },
};
