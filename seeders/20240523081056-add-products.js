// eslint-disable-next-line @typescript-eslint/no-var-requires
const products = require('../public/api/products.json');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('products', products);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('products', null, {});
  }
  
};
