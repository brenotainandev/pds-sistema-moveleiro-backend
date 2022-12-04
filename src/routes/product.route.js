const express = require('express');
const productController = require('../controllers/product.controller');
const { validadeProduct } = require('../middleware/product.middleware');

const productRoute = express.Router();

productRoute.get('/', productController.getAllProduct);
productRoute.post('/', validadeProduct, productController.createProduct);
productRoute.get('/:id', productController.getProductById);
productRoute.put('/:id', validadeProduct, productController.editProduct);
productRoute.delete('/:id', productController.excludeProduct);
productRoute.post('/name', productController.getProductName);

module.exports = productRoute;
