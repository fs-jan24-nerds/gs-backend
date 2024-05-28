import { Op, Sequelize } from 'sequelize';
import { Products, ProductsDetails } from '../db';
import { QueryParams } from '../types';
import { BadRequestError, NotFoundError } from '../util/errors/api-errors';

// type PageParams = {
//   perPage?: number;
//   page?: number;
// };

// type FilterParams = {
//   query?: string;
//   minPrice?: number;
//   maxPrice?: number;
// };

// type SortParams = {
//   sort?: string;
//   order?: 'asc' | 'desc';
// };

export const parseQueryParams = (queryParams: QueryParams) => {
  const { query, minPrice, maxPrice, sort, order, perPage, page, category } =
    queryParams;

  const parsedQuery = typeof query === 'string' ? query : undefined;
  const parsedMinPrice =
    typeof minPrice === 'string' ? parseFloat(minPrice) : undefined;
  const parsedMaxPrice =
    typeof maxPrice === 'string' ? parseFloat(maxPrice) : undefined;
  const parsedSort = typeof sort === 'string' ? sort : undefined;
  const parsedOrder: 'asc' | 'desc' = order === 'asc' ? 'asc' : 'desc';
  const parsedPerPage =
    typeof perPage === 'string' ? parseInt(perPage, 10) : undefined;
  const parsedPage = typeof page === 'string' ? parseInt(page, 10) : undefined;
  const parsedCategory = typeof category === 'string' ? category : 'phones';

  return {
    query: parsedQuery,
    minPrice: parsedMinPrice,
    maxPrice: parsedMaxPrice,
    sort: parsedSort,
    order: parsedOrder,
    perPage: parsedPerPage,
    page: parsedPage,
    category: parsedCategory,
  };
};

export const getAll = async (params: QueryParams) => {
  const { query, minPrice, maxPrice, sort, order, perPage, page, category } =
    parseQueryParams(params);

  const validCategories = ['phones', 'tablets', 'accessories'];

  if (!validCategories.includes(category)) {
    throw new BadRequestError(['Invalid category.']);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const whereClause: any = {
    category: category || 'phones',
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
    order: [[sort || 'price', (order || 'asc').toUpperCase()]],
    limit: perPage || 10,
    offset: (perPage || 10) * ((page || 1) - 1),
  });
};

export const getById = async (id: number) => {
  if (isNaN(id)) {
    throw new BadRequestError(['Invalid product ID']);
  }

  const product = await Products.findByPk(id);

  if (!product) {
    throw new NotFoundError(['Product not found']);
  }
  return product;
};

export const getProductByItemId = async (itemId: string) => {
  if (!itemId) {
    throw new BadRequestError(['Invalid product ItemId']);
  }

  const details = await ProductsDetails.findAll({
    where: {
      id: itemId,
    },
  });
  if (!details) {
    throw new NotFoundError(['Product not found']);
  }
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

  if (!products || products.length === 0) {
    throw new NotFoundError(['Products not found']);
  }

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

  if (!recommendedProducts || recommendedProducts.length === 0) {
    throw new NotFoundError(['No products found in this category']);
  }

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
