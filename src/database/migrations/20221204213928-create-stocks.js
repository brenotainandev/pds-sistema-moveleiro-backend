'use strict';
module.exports = {
  //JSdocs
  /**
   * @param {import('sequelize').Sequelize } queryInterface 
   * @param {import('sequelize').DataTypes} Sequelize 
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codeProduct: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'code_product',
      },
      quantityProduct: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'quantity_product',
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
    await queryInterface.dropTable('stocks');
  }
};
