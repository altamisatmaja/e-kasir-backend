'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InventoryTransactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transacion_date: {
        type: Sequelize.DATE
      },
      transacion_tpye: {
        type: Sequelize.STRING
      },
      qty: {
        type: Sequelize.INTEGER
      },
      inventory_id: {
        type: Sequelize.INTEGER,
          references: {
            model: "Inventorys",
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
    await queryInterface.dropTable('InventoryTransactions');
  }
};