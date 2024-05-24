'use strict';

import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import { products } from './models/products.js';
import { productsDetails } from './models/products-details.js';
dotenv.config();

const { DATABASE_URL } = process.env;

if (typeof DATABASE_URL !== 'string') {
  console.log('Something bad with env variables!');
  process.exit(1);
}

export const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export const Products = sequelize.define('products', products, {
  tableName: 'products',
  createdAt: false,
  updatedAt: false,
});
export const ProductsDetails = sequelize.define(
  'products_details',
  productsDetails,
  {
    tableName: 'products_details',
    createdAt: false,
    updatedAt: false,
  },
);
