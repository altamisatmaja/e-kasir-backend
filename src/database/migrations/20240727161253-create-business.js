"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "businesses",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.BIGINT,
        },
        business_name: {
          allowNull: false,
          type: Sequelize.STRING(50),
        },
        business_picture: {
          allowNull: false,
          type: Sequelize.STRING(144),
        },
        business_province: {
          allowNull: false,
          type: Sequelize.STRING(50),
        },
        business_city: {
          allowNull: false,
          type: Sequelize.STRING(50),
        },
        business_sub_district: {
          allowNull: false,
          type: Sequelize.STRING(50),
        },
        business_address_detail: {
          allowNull: false,
          type: Sequelize.STRING(50),
        },
        business_category_id: {
          allowNull: false,
          type: Sequelize.BIGINT,
          references: {
            model: "business_categories",
            key: "id",
          },
          onDelete: "CASCADE",
        },
        owner_id: {
          allowNull: false,
          type: Sequelize.BIGINT,
          references: {
            model: "owners",
            key: "id",
          },
          onDelete: "CASCADE",
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
      },
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("businesses");
  },
};
