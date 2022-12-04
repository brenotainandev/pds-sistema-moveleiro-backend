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
      codeProduct: { type: DataTypes.INTEGER, foreignKey: true },
      quantityProduct: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      updatedAt: false,
      timestamps: true,
      tableName: "stocks",
      underscored: true,
    }
  );

  Stock.associate = (models) => {
    Stock.belongsTo(models.Product, {
      foreignKey: "codeProduct",
      as: "product",
    });
  };

  return Stock;
};

module.exports = createStockModel;
