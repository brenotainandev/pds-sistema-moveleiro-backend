'use strict';
//JSdocs
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
const createProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    productCode: DataTypes.INTEGER,
    productName:DataTypes.STRING,
    productDescription:DataTypes.STRING,
    productColor:DataTypes.STRING,
    productPrice:DataTypes.FLOAT,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'products'
  });

  Product.associate = (models) => {
    Product.hasMany(models.Stock, {
      foreignKey: 'codeProduct',
      as: 'stocks'
    })
  };

  return Product;
};

module.exports = createProductModel;