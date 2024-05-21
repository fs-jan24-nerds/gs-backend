import * as productService from '../services/product.service.js';
import { Request, Response } from 'express';

export const getAllProducts = (req: Request, res: Response) => {
  res.send(productService.getAll());
};

export const getOneProduct = (req: Request, res: Response) => {
  const { id } = req.params;

  const product = productService.getById(Number(id));

  if (!product) {
    res.sendStatus(404);

    return;
  }

  res.send(product);
};

export const createProduct = (req: Request, res: Response) => {
  const body = req.body;

  if (!body) {
    res.sendStatus(422);

    return;
  }

  const product = productService.create(body);
  res.statusCode = 201;

  res.send(product);
};

export const updateProduct = (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  const product = productService.getById(Number(id));

  if (!product) {
    res.sendStatus(404);

    return;
  }

  const updatedProduct = productService.update(Number(id), body);

  res.statusCode = 200;

  res.send(updatedProduct);
};

export const removeProduct = (req: Request, res: Response) => {
  const { id } = req.params;

  if (!productService.getById(Number(id))) {
    res.sendStatus(404);

    return;
  }

  productService.remove(Number(id));

  res.sendStatus(204);
};
