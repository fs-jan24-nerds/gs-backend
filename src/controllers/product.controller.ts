import * as productService from '../services/product.service.js';
import { Request, Response } from 'express';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { query, minPrice, maxPrice, sortBy } = req.query;
    const { category } = req.body;

    const parsedQuery = typeof query === 'string' ? query : undefined;
    const parsedMinPrice =
      typeof minPrice === 'string' ? parseFloat(minPrice) : undefined;
    const parsedMaxPrice =
      typeof maxPrice === 'string' ? parseFloat(maxPrice) : undefined;
    const parsedSortBy = typeof sortBy === 'string' ? sortBy : undefined;

    const filterParams = {
      query: parsedQuery,
      minPrice: parsedMinPrice,
      maxPrice: parsedMaxPrice,
    };
    const sortParams = { sortBy: parsedSortBy };

    res.statusCode = 200;
    res.send(
      await productService.getAll(
        category,
        undefined,
        filterParams,
        sortParams,
      ),
    );
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

export const getSameModels = async (req: Request, res: Response) => {
  const { namespaceId } = req.params;

  const products = await productService.getSameModels(namespaceId);

  if (!products) {
    res.sendStatus(404);

    return;
  }
  res.status(200).send(products);
};
