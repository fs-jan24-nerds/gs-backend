import * as productService from '../services/product.service.js';
import { Request, Response, NextFunction } from 'express';
import { httpStatusCodes } from '../util/http-status-codes.js';
import { QueryParams } from '../types.js';

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const queryParams: QueryParams = req.query as unknown as QueryParams;

    const data = await productService.getAll(queryParams);

    res.status(httpStatusCodes.OK).send({
      products: data.rows,
      total: data.count,
    });
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    const productId = parseInt(id, 10);

    const product = await productService.getById(productId);

    res.status(200).send(product);
  } catch (error) {
    next(error);
  }
};

export const getProductByItemId = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { itemId } = req.params;

    const product = await productService.getProductByItemId(itemId);

    res.status(httpStatusCodes.OK).send(product);
  } catch (error) {
    next(error);
  }
};

export const getSameModels = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { namespaceId } = req.query;

  const parsedNamespaceId = typeof namespaceId === 'string' ? namespaceId : '';

  try {
    const products = await productService.getSameModels(parsedNamespaceId);
    res.status(httpStatusCodes.OK).send(products);
  } catch (error) {
    next(error);
  }
};

export const getRecommended = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { category } = req.params;
  try {
    const recommendedProducts =
      await productService.getRecommendedProducts(category);

    res.status(httpStatusCodes.OK).send(recommendedProducts);
  } catch (error) {
    next(error);
  }
};

export const getProductsSortedByHotPrice = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const products = await productService.getProductsSortedByHotPrice();
    res.status(httpStatusCodes.OK).json(products);
  } catch (error) {
    next(error);
  }
};
