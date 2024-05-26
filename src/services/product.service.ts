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
  sortBy?: string;
};

export const getAll = async (
  category: string = 'phones',
  pageParams: PageParams = { perPage: 200, page: 1 },
  filterParams: FilterParams = {},
  sortParams: SortParams = { sortBy: 'price' },
) => {
  const { perPage = 10, page = 1 } = pageParams;
  const { query, minPrice, maxPrice } = filterParams;
  const { sortBy = 'price' } = sortParams;

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

  const products = await Products.findAll({
    where: whereClause,
    order: [[sortBy, 'DESC']],
    limit: perPage,
    offset: perPage * (page - 1),
  });

  return products;
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
        [Op.like]: `${namespaceId}%`,
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

export const getProductsSortedByHotPrice = async () => {
  const products = await Products.findAll({
    attributes: {
      include: [
        [Sequelize.literal('"fullPrice" - "price"'), 'priceDifference'],
      ],
    },
    order: [[Sequelize.literal('"priceDifference"'), 'DESC']],
    limit: 10,
  });

  return products;
};
