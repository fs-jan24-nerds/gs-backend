import * as productDetailsService from '../services/productDetails.service.js';
import { Request, Response, NextFunction } from 'express';
import { httpStatusCodes } from '../util/http-status-codes.js';

export const getProductDetailsById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { id } = req.params;

  try {
    const productDetails = await productDetailsService.getById(id);
    res.status(httpStatusCodes.OK).send(productDetails);
  } catch (error) {
    next(error);
  }
};
