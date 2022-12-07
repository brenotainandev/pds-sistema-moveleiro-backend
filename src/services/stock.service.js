const { Stock } = require('../database/models');

const stockService = {

  getAllStock: async () => {
    const stock = await Stock.findAll();
    return stock;
  },

  createStock: async ({ StockPrice }) => {
    const stock = await Stock.create({ StockPrice });

    return stock;
  },

  getStockById: async (id) => {
    const stock = await Stock.findOne({ where: { id } });

    return stock;
  },

  editStock: async ({ StockPrice }, id ) => {
    const stock = await Stock.findOne({ where: { id: id } });

    if (!stock) return undefined;
  
    const newStock = await Stock.update({ StockPrice });

    return newStock;
  },

  excludeStock: async (id) => {  
    const stock = await Stock.findOne({ where: { id } });
    if (!stock) return 'NOT_FOUND';
  
    const result = await Stock.destroy({ where: { id } });
    return result;
  },

 };

module.exports = stockService;