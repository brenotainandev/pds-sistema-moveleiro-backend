'use strict';
//JSdocs
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
const createStockModel = (sequelize, DataTypes) => {
  const Stock = sequelize.define(
    "Stock",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      productId: { type: DataTypes.INTEGER },
      productQuantity: { type: DataTypes.INTEGER },
    },
    {
      updatedAt: false,
      timestamps: true,
      tableName: "stocks",
      underscored: true,
    }
  );

  return Stock;
};

module.exports = createStockModel;
