const Joi = require('joi');

const validadeProduct = (req, res, next) => {
  const { body } = req;

  const schema = Joi.object().keys({
    productCode: Joi.number().required(),
    productName: Joi.string().required(), 
    productDescription: Joi.string().required(),
    productColor: Joi.string().required(),
    productPrice: Joi.number().required(),
  });

  const { error } = schema.validate(body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = { validadeProduct };
