import { Op } from 'sequelize';
import { Products } from '../db';

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
  try {
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
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Error fetching products');
  }
};

export const getById = async (id: number) => {
  const product = await Products.findByPk(id);

  return product;
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
