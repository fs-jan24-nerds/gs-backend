import * as productService from '../services/product.service.js';
import { Request, Response } from 'express';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { query, minPrice, maxPrice, sort, order, perPage, page } = req.query;
    const { category } = req.body;

    const parsedQuery = typeof query === 'string' ? query : undefined;
    const parsedMinPrice =
      typeof minPrice === 'string' ? parseFloat(minPrice) : undefined;
    const parsedMaxPrice =
      typeof maxPrice === 'string' ? parseFloat(maxPrice) : undefined;
    const parsedSort = typeof sort === 'string' ? sort : undefined;
    const parsedOrder: 'asc' | 'desc' = order === 'asc' ? 'asc' : 'desc';
    const parsedPerPage =
      typeof perPage === 'string' ? parseInt(perPage, 10) : undefined;
    const parsedPage =
      typeof page === 'string' ? parseInt(page, 10) : undefined;

    const filterParams = {
      query: parsedQuery,
      minPrice: parsedMinPrice,
      maxPrice: parsedMaxPrice,
    };
    const sortParams = { sort: parsedSort, order: parsedOrder };

    const data = await productService.getAll(

      category,
      { perPage: parsedPerPage, page: parsedPage },
      filterParams,
      sortParams,
    );
    res.statusCode = 200;
    res.send({
      products: data.rows,
      total: data.count,
    });

  } catch (error) {
    console.error('Error getting products:', error);
    res.status(500).send('Error getting products');
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const productId = parseInt(id, 10);

    if (isNaN(productId)) {
      return res.status(400).send('Invalid product ID');
    }

    const product = await productService.getById(productId);

    res.status(200).send(product);
  } catch (error) {
    if (error) {
      return res.status(404).send('Product not found');
    }
    console.error('Error fetching product:', error);
    res.status(500).send('Error fetching product');
  }
};

export const getProductByItemId = async (req: Request, res: Response) => {
  try {
    const { itemId } = req.params;

    if (!itemId) {
      return res.status(400).send('Invalid product ItemId');
    }

    const product = await productService.getProductByItemId(itemId);

    res.status(200).send(product);
  } catch (error) {
    if (error) {
      return res.status(404).send('Product not found');
    }
    console.error('Error fetching product:', error);
    res.status(500).send('Error fetching product');
  }
};

export const getSameModels = async (req: Request, res: Response) => {
  const { namespaceId } = req.query;

  const parsedNamespaceId = typeof namespaceId === 'string' ? namespaceId : '';

  const products = await productService.getSameModels(parsedNamespaceId);

  if (!products) {
    res.sendStatus(404);

    return;
  }
  res.status(200).send(products);
};

export const getRecommended = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { category } = req.params;
  try {
    const recommendedProducts =
      await productService.getRecommendedProducts(category);

    if (recommendedProducts.length > 0) {
      res.status(200).send(recommendedProducts);
    } else {
      res.status(404).send('No products found in this category');
    }
  } catch (error) {
    console.error('Error in getRecommended controller:', error);
    res.status(500).send('Internal Server Error');
  }
};

export const getProductsSortedByHotPrice = async (
  req: Request,
  res: Response,
) => {
  try {
    const products = await productService.getProductsSortedByHotPrice();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Internal Server Error');
  }
};
