'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('products',
  [
    {
      product_code: 229688300,
      product_name: 'Base Cama Box Casal Plumatex Alfa',
      product_description: 'A Base para Cama Box Casal Magnum Plumatex é produzida em madeira usinada (Pinnus de Reflorestamento), com sistema de sustentação transversal.',
      product_color: 'Cinza',
      product_price: 990.80,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      product_code: 229688400,
      product_name: 'Sofá Retrátil e Reclinável 2 lugares',
      product_description: 'Conforto, qualidade e praticidade, um produto pensado para juntar essas 3 qualidades em um só.',
      product_color: 'Azul',
      product_price: 1300,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      product_code: 229688500,
      product_name: 'Guarda Roupa Casal 06 Portas Colin Henn',
      product_description: 'Este móvel foi pensado de forma a enaltecer o seu ambiente, transformando o mesmo em uma composição harmoniosa e aconchegante no seu ambiente de descanso.',
      product_color: 'Branco',
      product_price: 480.68,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {}),

down: async (queryInterface) => queryInterface.bulkDelete('products', null, {}),
};