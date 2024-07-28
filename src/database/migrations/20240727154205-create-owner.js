'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("owners", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      full_name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      date_of_birth: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      gender: {
        allowNull: false,
        type: Sequelize.ENUM("Laki-laki", "Perempuan"),
      },
      user_id: {
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        },
        type: Sequelize.BIGINT,
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
    await queryInterface.dropTable("owners");
  },
};
