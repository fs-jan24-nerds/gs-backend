import { Users } from '../db';
import * as favouritesService from '../services/favourites.service';
import { NextFunction, Request, Response } from 'express';
import { httpStatusCodes } from '../util/http-status-codes';

export const addFavourite = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId, productId } = req.body;
  try {
    const favouriteProduct = await favouritesService.addFavouriteProduct(
      Number(userId),
      Number(productId),
    );
    res.status(httpStatusCodes.OK).send(favouriteProduct);
  } catch (error) {
    next(error);
  }
};

export const getFavouriteProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId } = req.params;

  try {
    const favouriteProducts =
      await favouritesService.getFavouriteProductsByUserId(Number(userId));
    res.status(httpStatusCodes.OK).json(favouriteProducts);
  } catch (error) {
    next(error);
  }
};

export const removeFavouriteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId, productId } = req.body;
  const user = await Users.findByPk(Number(userId));

  if (!user) {
    res.sendStatus(404);

    return;
  }

  try {
    const product = await favouritesService.removeFavouriteProduct(
      Number(userId),
      Number(productId),
    );
    res.status(httpStatusCodes.OK).json(product);
  } catch (error) {
    next(error);
  }
};
