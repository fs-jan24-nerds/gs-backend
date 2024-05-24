import * as productService from '../services/product.service.js';
import { Request, Response } from 'express';

export const getAllProducts = async (req: Request, res: Response) => {
  if (req.body.namespaceId) {
    res.statusCode = 200;
    const products = await productService.getSameModels(req.body.namespaceId);
    res.send(products);

    return;
  }

  res.statusCode = 200;
  res.send(
    await productService.getAll({
      ...req.body,
      ...req.query,
    }),
  );
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

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(400);

    return;
  }

  const product = await productService.getProductById(Number(id));

  if (!product) {
    res.sendStatus(404);

    return;
  }
  res.statusCode = 200;
  res.send(product);
};

// export const createProduct = (req: Request, res: Response) => {
//   const body = req.body;

//   if (!body) {
//     res.sendStatus(422);

//     return;
//   }

//   const product = productService.create(body);
//   res.statusCode = 201;

//   res.send(product);
// };

// export const updateProduct = (req: Request, res: Response) => {
//   const { id } = req.params;
//   const body = req.body;
//   const product = productService.getById(Number(id));

//   if (!product) {
//     res.sendStatus(404);

//     return;
//   }

//   const updatedProduct = productService.update(Number(id), body);

//   res.statusCode = 200;

//   res.send(updatedProduct);
// };

// export const removeProduct = (req: Request, res: Response) => {
//   const { id } = req.params;

//   if (!productService.getById(Number(id))) {
//     res.sendStatus(404);

//     return;
//   }

//   productService.remove(Number(id));

//   res.sendStatus(204);
// };
