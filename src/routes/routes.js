const express = require('express');
const productRoute = require('./product.route');
const customerRoute = require('./customer.route');

const routes = express.Router({ mergeParams: true });

routes.use('/product', productRoute);
routes.use('/customer', customerRoute);

module.exports = routes;
