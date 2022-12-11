const { Customer } = require('../database/models');
const { Op } = require("sequelize");

const customerService = {

  getAllCustomer: async () => {
    const customer = await Customer.findAll();
    return customer;
  },

  getCustomerName: async ({ customerName }) => {
    const customer = await Customer.findAll({ where: { customerName: { [Op.like]: `%${customerName}%` } } });
    return customer;
  },

  createCustomer: async ({ customerName, cpf, phone, email, cep, street, houseNumber, complement, district, city, state }) => {
    const customer = await Customer.create({ customerName, cpf, phone, email, cep, street, houseNumber, complement, district, city, state });

    return customer;
  },

  getCustomerById: async (id) => {
    const customer = await Customer.findOne({ where: { id } });

    return customer;
  },

  editCustomer: async ({ customerName, cpf, phone, email, cep, street, houseNumber, complement, district, city, state }, id ) => {
    const customer = await Customer.findOne({ where: { id: id } });

    if (!customer) return undefined;
  
    const newCustomer = await customer.update({ customerName, cpf, phone, email, cep, street, houseNumber, complement, district, city, state });

    return newCustomer;
  },

  excludeCustomer: async (id) => {  
    const customer = await Customer.findOne({ where: { id } });
    if (!customer) return 'NOT_FOUND';
  
    const result = await Customer.destroy({ where: { id } });
    return result;
  },

 };

module.exports = customerService;
