const productService = require('../services/product.service');

const productController = {

  getAllProduct: async (_req, res) => {
    try {
      const product = await productService.getAllProduct();
  
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  },

  createProduct: async (req, res) => {
    const { productCode, productName, productDescription, productColor, productPrice } = req.body;
  
    try {
      const product = await productService.createProduct({ productCode, productName, productDescription, productColor, productPrice });
  
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  },

  getProductName: async (req, res) => {
    const { productName } = req.body;
  
    try {
      const product = await productService.getProductName({ productName });
  
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await productService.getProductById(req.params.id);

      if (!product) {
        return res.status(404).json({ message: 'Produto não cadastrado' });
      }
    
      return res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  },

  editProduct: async (req, res) => {
    try {
      const { params: { id }, body } = req;
      const product = await productService.editProduct(body, id);

      if (product === undefined) return res.status(401).json({ message: 'Atualização não autorizada' });
    
      return res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  },

  excludeProduct: async (req, res) => {
    try {
      const result = await productService.excludeProduct(req.params.id);
    if (result === 'NOT_FOUND') {
      return res.status(404).json({ message: 'Produto não existe' });
    }

    return res.status(204).json({ message: 'Produto excluido com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  },

 };

module.exports = productController;