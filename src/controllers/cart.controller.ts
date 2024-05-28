import * as cartService from '../services/cart.service';
import { NextFunction, Request, Response } from 'express';
import { httpStatusCodes } from '../util/http-status-codes';

export const addProductToCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId, productId } = req.body;
  try {
    const product = await cartService.addProduct(
      Number(userId),
      Number(productId),
    );
    res.status(httpStatusCodes.OK).send(product);
  } catch (error) {
    next(error);
  }
};

export const getCartProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId } = req.params;

  try {
    const cartProducts = await cartService.getCartProductsByUserId(
      Number(userId),
    );
    res.status(httpStatusCodes.OK).json(cartProducts);
  } catch (error) {
    next(error);
  }
};

export const removeProductFromCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId, productId } = req.body;

  try {
    const product = await cartService.removeProduct(
      Number(userId),
      Number(productId),
    );
    res.status(httpStatusCodes.OK).json(product);
  } catch (error) {
    next(error);
  }
};

export const removeAllProductsFromCart = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId } = req.body;

  try {
    const product = await cartService.removeAllProducts(Number(userId));
    res.status(httpStatusCodes.OK).json(product);
  } catch (error) {
    next(error);
  }
};
