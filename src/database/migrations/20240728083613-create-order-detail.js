'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
      },
      total_price: {
        type: Sequelize.INTEGER
      },
      order_id: {
        type: Sequelize.INTEGER,
          references: {
            model: "Orders",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
      },
      product_id: {
        type: Sequelize.INTEGER,
          references: {
            model: "Products",
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
    await queryInterface.dropTable('OrderDetails');
  }
};