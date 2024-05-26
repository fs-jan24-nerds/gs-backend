import express from 'express';
import * as productController from '../controllers/product.controller.js';
import * as productDetailsController from '../controllers/productDetails.controller.js';

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/similar', productController.getSameModels);
router.get('/product/:itemId', productController.getProductByItemId);
router.get('/:category/recommended', productController.getRecommended);
router.get(
  '/products/hot-price',
  productController.getProductsSortedByHotPrice,
);
router.get('/details/:id', productDetailsController.getProductDetailsById);
router.get('/:id', productController.getProductById);
// router.post('/', productController.createProduct);
// router.patch('/:id', productController.updateProduct);
// router.delete('/:id', productController.removeProduct);

export { router };
