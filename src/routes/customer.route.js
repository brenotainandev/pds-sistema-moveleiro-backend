const express = require('express');
const customerController = require('../controllers/customer.controller');
const customerRoute = express.Router();

customerRoute.get('/', customerController.getAllCustomer);
customerRoute.post('/', customerController.createCustomer);
customerRoute.get('/:id', customerController.getCustomerById);
customerRoute.put('/:id', customerController.editCustomer);
customerRoute.delete('/:id', customerController.excludeCustomer);
customerRoute.post('/name', customerController.getCustomerName);

module.exports = customerRoute;
