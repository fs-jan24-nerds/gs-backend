import { ProductsDetails } from '../db';

export const getById = async (id: string) => {
  const productDetails = await ProductsDetails.findByPk(id);

  return productDetails;
};
