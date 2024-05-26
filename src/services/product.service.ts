import { Op, Sequelize } from 'sequelize';
import { Products, ProductsDetails } from '../db';

type PageParams = {
  perPage?: number;
  page?: number;
};

type FilterParams = {
  query?: string;
  minPrice?: number;
  maxPrice?: number;
};

type SortParams = {
  sort?: string;
  order?: 'asc' | 'desc';
};

export const getAll = async (
  category: string = 'phones',
  pageParams: PageParams = { perPage: 1, page: 1 },
  filterParams: FilterParams = {},
  sortParams: SortParams = { sort: 'price', order: 'asc' },
) => {
  const { perPage = 10, page = 1 } = pageParams;
  const { query, minPrice, maxPrice } = filterParams;
  const { sort = 'price', order = 'asc' } = sortParams;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const whereClause: any = {
    category,
  };

  if (query) {
    whereClause.name = { [Op.like]: `%${query}%` };
  }
  if (minPrice !== undefined) {
    whereClause.price = { [Op.gte]: minPrice };
  }
  if (maxPrice !== undefined) {
    if (whereClause.price) {
      whereClause.price[Op.lte] = maxPrice;
    } else {
      whereClause.price = { [Op.lte]: maxPrice };
    }
  }

  return await Products.findAndCountAll({
    where: whereClause,
    order: [[sort, order.toUpperCase()]],
    limit: perPage,
    offset: perPage * (page - 1),
  });
};

export const getById = async (id: number) => {
  const product = await Products.findByPk(id);

  return product;
};

export const getProductByItemId = async (itemId: string) => {
  const details = await ProductsDetails.findAll({
    where: {
      id: itemId,
    },
  });
  return details;
};

export const getSameModels = async (namespaceId: string) => {
  const products = await Products.findAll({
    where: {
      itemId: {
        [Op.startsWith]: namespaceId,
      },
    },
  });
  return products;
};

export const getRecommendedProducts = async (category: string) => {
  const recommendedProducts = await Products.findAll({
    where: {
      category: category,
    },
    order: Sequelize.literal('random()'),
    limit: 10,
  });

  return recommendedProducts;
};
