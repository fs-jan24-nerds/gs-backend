import { Products } from '../db.js';
import { Product } from '../types.js';
// import { stringNormalize } from '../util/stringNormalize.js';

const products: Product[] = [
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
    id: 121,
    category: 'accessories',
    itemId: 'apple-watch-series-3-38mm-space-gray',
    name: 'Apple Watch Series 3 38mm Space Gray',
    fullPrice: 199,
    price: 169,
    screen: "1.3' OLED",
    capacity: '38mm',
    color: 'space gray',
    ram: '768MB',
    year: 2017,
    image: 'img/accessories/apple-watch-series-3/space-gray/00.webp',
  },
  {
    id: 155,
    category: 'tablets',
    itemId: 'apple-ipad-pro-11-2021-128gb-spacegray',
    name: 'Apple iPad Pro 11 (2021) 128GB Space Gray',
    capacity: '128GB',
    fullPrice: 799,
    price: 749,
    color: 'spacegray',
    image: 'img/tablets/apple-ipad-pro-11-2021/spacegray/00.webp',
    screen: "11' Liquid Retina",
    ram: '8GB',
    year: 2021,
  },
];

// type FilterParams = {
//   category?: Categories;
//   page?: number;
//   limit?: number;
//   search?: string;
// };

export const getAll = async ({ ...params }) => {
  console.log(params);
  return Products.findAll();
};

export const getSameModels = (namespaceId: string) => {
  return products.filter((product) => product.itemId.startsWith(namespaceId));
};

export const getProductById = (id: number) => {
  return products.find((product) => product.id === id) as Product;
};

// export const create = (body: Product) => {
//   products.push(body);

//   return body;
// };

// export const update = (id: number, body: Product) => {
//   const product = getById(id);

//   Object.assign(product, { ...body });

//   return product;
// };

// export const remove = (id: number) => {
//   products = products.filter((product) => product.id !== id);
// };
