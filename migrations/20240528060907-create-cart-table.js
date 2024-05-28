'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cart', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      
      },

    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('cart');
  },
};
