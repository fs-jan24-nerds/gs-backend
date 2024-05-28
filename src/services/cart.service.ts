import { Cart, Users } from '../db';
import { NotFoundError } from '../util/errors/api-errors';

export const addProduct = async (userId: number, productId: number) => {
  const user = await Users.findByPk(userId);

  if (!user) {
    throw new NotFoundError(['User not found']);
  }

  const newProduct = await Cart.create({ userId, productId });

  return newProduct;
};

export const getCartProductsByUserId = async (userId: number) => {
  const user = await Users.findByPk(userId);

  if (!user) {
    throw new NotFoundError(['User not found']);
  }

  const userCart = await Cart.findAll({
    where: { userId },
  });

  if (!userCart.length) {
    throw new NotFoundError(['No products found in cart']);
  }

  return userCart;
};

export const removeProduct = async (userId: number, productId: number) => {
  const user = await Users.findByPk(userId);

  if (!user) {
    throw new NotFoundError(['User not found']);
  }

  const result = await Cart.destroy({
    where: {
      userId,
      productId,
    },
  });

  if (result === 0) {
    throw new NotFoundError(['Product not found in cart']);
  }

  return result;
};

export const removeAllProducts = async (userId: number) => {
  const user = await Users.findByPk(userId);

  if (!user) {
    throw new NotFoundError(['User not found']);
  }

  const result = await Cart.destroy({
    where: {
      userId,
    },
  });

  return result;
};
