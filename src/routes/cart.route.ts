import express from 'express';
import * as cartController from '../controllers/cart.controller';

const router = express.Router();

router.post('/', cartController.addProductToCart);
router.get('/:userId', cartController.getCartProducts);
router.delete('/', cartController.removeProductFromCart);
router.delete('/:userId', cartController.removeAllProductsFromCart);

export { router };
