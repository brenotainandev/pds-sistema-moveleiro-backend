const customerService = require('../services/customer.service');

const customerController = {
  getAllCustomer: async (_req, res) => {
    try {
      const customer = await customerService.getAllCustomer();
  
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  },

  createCustomer: async (req, res) => {
    const { customerName, cpf, phone, email, cep, street, houseNumber, complement, district, city, state } = req.body;
  
    try {
      const customer = await customerService.createCustomer({ customerName, cpf, phone, email, cep, street, houseNumber, complement, district, city, state });
  
      res.status(201).json(customer);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  },

  getCustomerName: async (req, res) => {
    const { customerName } = req.body;
  
    try {
      const customer = await customerService.getCustomerName({ customerName });
  
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  },

  getCustomerById: async (req, res) => {
    try {
      const customer = await customerService.getCustomerById(req.params.id);

      if (!customer) {
        return res.status(404).json({ message: 'Cliente não cadastrado' });
      }
    
      return res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  },

  editCustomer: async (req, res) => {
    try {
      const { params: { id }, body } = req;
      const customer = await customerService.editCustomer(body, id);

      if (customer === undefined) return res.status(401).json({ message: 'Atualização não autorizada' });
    
      return res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  },

  excludeCustomer: async (req, res) => {
    try {
      const result = await customerService.excludeCustomer(req.params.id);
    if (result === 'NOT_FOUND') {
      return res.status(404).json({ message: 'Cliente não existe' });
    }

    return res.status(204).json({ message: 'Cliente excluido com sucesso' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao tentar realizar operação' });
    }
  },

 };

module.exports = customerController;