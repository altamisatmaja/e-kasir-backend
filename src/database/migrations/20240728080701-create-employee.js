'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      full_name: {
        type: Sequelize.STRING(50)
      },
      employee_address_detail: {
        type: Sequelize.STRING(50)
      },
      date_of_birth: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.ENUM('Laki-laki', 'Perempuan')
      },
      work_at: {
        type: Sequelize.DATE
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      user_id: {
        allowNull: false,
        type: Sequelize.BIGINT,
          references: {
            model: "users",
            key: "id",
          },
          onDelete: "CASCADE",
      },
      business_id: {
        allowNull: false,
        type: Sequelize.BIGINT,
          references: {
            model: "businesses",
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('employees');
  }
};