'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('inventory_transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      transacion_date: {
        type: Sequelize.DATE
      },
      transacion_type: {
        type: Sequelize.ENUM('Penambahan', 'Pengurangan')
      },
      qty: {
        type: Sequelize.BIGINT
      },
      inventory_id: {
        type: Sequelize.BIGINT,
          references: {
            model: "inventories",
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
    await queryInterface.dropTable('inventory_transactions');
  }
};