import { Favourites, Users } from '../db';
import { NotFoundError } from '../util/errors/api-errors';

export const addFavouriteProduct = async (
  userId: number,
  productId: number,
) => {
  const user = await Users.findByPk(userId);

  if (!user) {
    throw new NotFoundError(['User not found']);
  }

  const favouriteProduct = await Favourites.create({ userId, productId });

  return favouriteProduct;
};

export const getFavouriteProductsByUserId = async (userId: number) => {
  const favouriteProducts = await Favourites.findAll({
    where: { userId },
  });

  if (!favouriteProducts || favouriteProducts.length === 0) {
    throw new NotFoundError(['No favourite products found']);
  }

  return favouriteProducts;
};

export const removeFavouriteProduct = async (
  userId: number,
  productId: number,
) => {
  const user = await Users.findByPk(userId);

  if (!user) {
    throw new NotFoundError(['User not found']);
  }

  const result = await Favourites.destroy({
    where: {
      userId,
      productId,
    },
  });

  if (result === 0) {
    throw new NotFoundError(['Favourite product not found']);
  }

  return result;
};
