'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
        type: Sequelize.STRING
      },
      employee_address_detail: {
        type: Sequelize.STRING
      },
      date_of_birth: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      work_at: {
        type: Sequelize.DATE
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      user_id: {
        type: Sequelize.INTEGER,
          references: {
            model: "Users",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
      },
      business_id: {
        type: Sequelize.INTEGER,
          references: {
            model: "Businesses",
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
    await queryInterface.dropTable('Employees');
  }
};