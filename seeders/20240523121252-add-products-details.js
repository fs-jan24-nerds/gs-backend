'use strict';

const phones = require('../public/api/phones.json')
const tablets = require('../public/api/tablets.json')
const accessories = require('../public/api/accessories.json')

const productsDetails = [...phones, ...tablets, ...accessories]
  .map(product => ({
    ...product,
    description: JSON.stringify(product.description),
  }));
  

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('products_details', productsDetails);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('products_details', null, {});
  }
};
