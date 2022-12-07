'use strict';
module.exports = {
  //JSdocs
  /**
   * @param {import('sequelize').Sequelize } queryInterface 
   * @param {import('sequelize').DataTypes} Sequelize 
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'customer_name',
      },
      cpf: {
        type: Sequelize.STRING(),
        allowNull: false,
        field: 'cpf',
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'phone',
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'email',
      },
      cep: {
        type: Sequelize.STRING(),
        allowNull: false,
        field: 'cep',
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'street',
      },
      houseNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'house_number',
      },
      complement: {
        type: Sequelize.STRING(),
        allowNull: false,
        field: 'complement',
      },
      district: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'district',
      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'state',
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'city',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('customers');
  }
};
