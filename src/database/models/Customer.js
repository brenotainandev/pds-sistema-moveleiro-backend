'use strict';
//JSdocs
  /**
   * @param {import('sequelize').Sequelize } sequelize 
   * @param {import('sequelize').DataTypes} DataTypes 
   */
const createCustomerModel = (sequelize, DataTypes) => {
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
    city:DataTypes.STRING,
    state:DataTypes.STRING,
  }, {
    underscored: true,
    tableName: 'customers'
  })
  return Customer;
};

module.exports = createCustomerModel
