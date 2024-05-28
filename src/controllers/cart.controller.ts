import { Users } from '../db';
import * as cartService from '../services/cart.service';
import { Request, Response } from 'express';

export const addProductToCart = async (req: Request, res: Response) => {
  const { userId, productId } = req.body;
  const user = await Users.findByPk(Number(userId));

  if (!user) {
    res.sendStatus(404);

    return;
  }
  const product = await cartService.addProduct(
    Number(userId),
    Number(productId),
  );

  res.send(product);
  res.status(200);
};

export const getCartProducts = async (req: Request, res: Response) => {
  const { userId } = req.params;

  if (!userId) {
    res.sendStatus(404);

    return;
  }

  const cartProducts = await cartService.getCartProductsByUserId(
    Number(userId),
  );

  if (!cartProducts) {
    res.sendStatus(404);

    return;
  }

  res.json(cartProducts);
  res.status(200);
};

export const removeProductFromCart = async (req: Request, res: Response) => {
  const { userId, productId } = req.body;
  const user = await Users.findByPk(Number(userId));

  if (!user) {
    res.sendStatus(404);

    return;
  }

  const product = await cartService.removeProduct(
    Number(userId),
    Number(productId),
  );
  res.json(product);
  res.status(200);
};

export const removeAllProductsFromCart = async (
  req: Request,
  res: Response,
) => {
  const { userId } = req.body;
  const user = await Users.findByPk(Number(userId));

  if (!user) {
    res.sendStatus(404);

    return;
  }

  const product = await cartService.removeAllProducts(Number(userId));
  res.json(product);
  res.status(200);
};
