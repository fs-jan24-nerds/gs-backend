import { Users } from '../db';
import * as favouritesService from '../services/favourites.service';
import { Request, Response } from 'express';

export const addFavourite = async (req: Request, res: Response) => {
  const { userId, productId } = req.body;
  const user = await Users.findByPk(Number(userId));

  if (!user) {
    res.sendStatus(404);

    return;
  }
  const product = await favouritesService.addFavouriteProduct(
    Number(userId),
    Number(productId),
  );

  res.send(product);
  res.status(200);
};

export const getFavouriteProducts = async (req: Request, res: Response) => {
  const { userId } = req.params;

  if (!userId) {
    res.sendStatus(404);

    return;
  }

  const favouriteProducts =
    await favouritesService.getFavouriteProductsByUserId(Number(userId));

  if (!favouriteProducts) {
    res.sendStatus(404);

    return;
  }

  res.json(favouriteProducts);
  res.status(200);
};

export const removeFavouriteProduct = async (req: Request, res: Response) => {
  const { userId, productId } = req.body;
  const user = await Users.findByPk(Number(userId));

  if (!user) {
    res.sendStatus(404);

    return;
  }

  const product = await favouritesService.removeFavouriteProduct(
    Number(userId),
    Number(productId),
  );
  res.json(product);
  res.status(200);
};
