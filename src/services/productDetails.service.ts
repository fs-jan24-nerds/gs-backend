import { ProductsDetails } from '../db';
import { NotFoundError, BadRequestError } from '../util/errors/api-errors';

export const getById = async (id: string) => {
  if (!id) {
    throw new BadRequestError(['Invalid product ID']);
  }

  const productDetails = await ProductsDetails.findByPk(id);

  if (!productDetails) {
    throw new NotFoundError(['Product details not found']);
  }

  return productDetails;
};
