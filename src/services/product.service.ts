import { Product } from '../types.js';

let products: Product[] = [
  {
    id: 1,
    category: 'phones',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screen: "4.7' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.webp',
  },
  {
    id: 2,
    category: 'phones',
    itemId: 'apple-iphone-7-plus-32gb-black',
    name: 'Apple iPhone 7 Plus 32GB Black',
    fullPrice: 540,
    price: 500,
    screen: "5.5' IPS",
    capacity: '32GB',
    color: 'black',
    ram: '3GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7-plus/black/00.webp',
  },
];

export const getAll = () => {
  return products;
};

export const getById = (id: number) => {
  return products.find((product) => product.id === id) || null;
};

export const create = (body: Product) => {
  products.push(body);

  return body;
};

export const update = (id: number, body: Product) => {
  const product = getById(id);

  if (!product) {
    console.error(`Product with ID ${id} not found`);
    return null;
  }

  Object.assign(product, { ...body });

  return product;
};

export const remove = (id: number) => {
  products = products.filter((product) => product.id !== id);
};
