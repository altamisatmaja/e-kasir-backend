'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING(20),
        unique: true,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(65),
        unique: true,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      role: {
        allowNull: false,
        type: Sequelize.ENUM('Admin', 'Pemilik Usaha', 'Pegawai'),
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
    await queryInterface.dropTable('users');
  }
};