'use strict';
module.exports = {
  //JSdocs
  /**
   * @param {import('sequelize').Sequelize } queryInterface 
   * @param {import('sequelize').DataTypes} Sequelize 
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      productCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'product_code',
      },
      productName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'product_name',
      },
      productDescription: {
        type: Sequelize.STRING(1000),
        allowNull: false,
        field: 'product_description',
      },
      productColor: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'product_color',
      },
      productPrice: {
        type: Sequelize.FLOAT,
        allowNull: false,
        field: 'product_price',
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
    await queryInterface.dropTable('products');
  }
};
