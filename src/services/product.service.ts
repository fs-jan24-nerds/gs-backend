import { Op } from 'sequelize';
import { Products } from '../db.js';

export const getAll = async ({ ...params }) => {
  console.log(params);
  return Products.findAll();
};

export const getSameModels = async (namespaceId: string) => {
  const products = await Products.findAll({
    where: {
      itemId: {
        [Op.like]: `${namespaceId}%`,
      },
    },
  });
  return products;
};

export const getProductById = (id: number) => {
  return Products.findByPk(id);
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
