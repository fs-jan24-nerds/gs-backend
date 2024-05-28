import { Cart } from '../db';

export const addProduct = async (userId: number, productId: number) => {
  const newProduct = await Cart.create({ userId, productId });

  return newProduct;
};

export const getCartProductsByUserId = async (userId: number) => {
  const userCart = await Cart.findAll({
    where: { userId },
  });

  return userCart;
};

export const removeProduct = async (userId: number, productId: number) => {
  const result = await Cart.destroy({
    where: {
      userId,
      productId,
    },
  });

  return result;
};

export const removeAllProducts = async (userId: number) => {
  const result = await Cart.destroy({
    where: {
      userId,
    },
  });

  return result;
};
