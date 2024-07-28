'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING(50)
      },
      category_product_id: {
        type: Sequelize.BIGINT,
          references: {
            model: "product_categories",
            key: "id",
          },
          onDelete: "CASCADE",
      },
      price: {
        type: Sequelize.BIGINT
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
    await queryInterface.dropTable('products');
  }
};