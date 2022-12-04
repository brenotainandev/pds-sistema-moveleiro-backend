const { Product } = require('../database/models');
const { Op } = require("sequelize");

const productService = {

  getAllProduct: async () => {
    const product = await Product.findAll();
    return product;
  },

  getProductName: async ({ productName }) => {
    const product = await Product.findAll({ where: { productName: { [Op.like]: `%${productName}%` } } });
    return product;
  },

  createProduct: async ({ productCode, productName, productDescription, productColor, productPrice }) => {
    const product = await Product.create({ productCode, productName, productDescription, productColor, productPrice });

    return product;
  },

  getProductById: async (id) => {
    const product = await Product.findOne({ where: { id } });

    return product;
  },

  editProduct: async ({ productCode, productName, productDescription, productColor, productPrice }, id ) => {
    const product = await Product.findOne({ where: { id: id } });

    if (!product) return undefined;
  
    const newProduct = await product.update({ productCode, productName, productDescription, productColor, productPrice });

    return newProduct;
  },

  excludeProduct: async (id) => {  
    const product = await Product.findOne({ where: { id } });
    if (!product) return 'NOT_FOUND';
  
    const result = await Product.destroy({ where: { id } });
    return result;
  },

 };

module.exports = productService;
