const express = require('express');
const productRoute = require('./product.route');

const routes = express.Router({ mergeParams: true });

routes.use('/product', productRoute);

module.exports = routes;
