import { Favourites } from '../db';

export const addFavouriteProduct = async (
  userId: number,
  productId: number,
) => {
  const favouriteProduct = await Favourites.create({ userId, productId });

  return favouriteProduct;
};

export const getFavouriteProductsByUserId = async (userId: number) => {
  const favouriteProducts = await Favourites.findAll({
    where: { userId },
  });

  return favouriteProducts;
};

export const removeFavouriteProduct = async (
  userId: number,
  productId: number,
) => {
  const result = await Favourites.destroy({
    where: {
      userId,
      productId,
    },
  });

  return result;
};
