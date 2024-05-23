import * as productDetailsService from '../services/productDetails.service.js';
import { Request, Response } from 'express';

export const getProductDetailsById = (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(400);

    return;
  }

  const productDetails = productDetailsService.getById(id);

  if (!productDetails) {
    res.sendStatus(404);

    return;
  }

  res.statusCode = 200;
  res.send(productDetails);
};
