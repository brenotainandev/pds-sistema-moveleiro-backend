'use strict';
//JSdocs
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
const createProductModel = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    customerName:DataTypes.STRING,
    cpf:DataTypes.STRING,
    phone:DataTypes.STRING,
    email:DataTypes.STRING,
    cep:DataTypes.STRING,
    street:DataTypes.STRING,
    houseNumber:DataTypes.STRING,
    complement:DataTypes.STRING,
    district:DataTypes.STRING,
    state:DataTypes.STRING,
    city:DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'customers'
  });

  return Customer;
};

module.exports = createCustomerModel;