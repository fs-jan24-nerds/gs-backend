import express from 'express';
import * as productController from '../controllers/product.controller.js';
import * as productDetailsController from '../controllers/productDetails.controller.js';

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productDetailsController.getProductDetailsById);

// router.post('/', productController.createProduct);
// router.patch('/:id', productController.updateProduct);
// router.delete('/:id', productController.removeProduct);

export { router };
