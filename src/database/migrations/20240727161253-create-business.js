"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Businesses",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        business_name: {
          type: Sequelize.STRING,
        },
        business_picture: {
          type: Sequelize.STRING,
        },
        business_province: {
          type: Sequelize.STRING,
        },
        business_city: {
          type: Sequelize.STRING,
        },
        business_sub_district: {
          type: Sequelize.STRING,
        },
        business_address_detail: {
          type: Sequelize.STRING,
        },
        business_category_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "BusinessCategories",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
        owner_id: {
          type: Sequelize.INTEGER,
          references: {
            model: "Owner",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
        created_at: {
          allowNull: false,
          type: Sequelize.NOW,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.NOW,
        },
      },
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Businesses");
  },
};
