import express from 'express';
import * as favouritesController from '../controllers/favourites.controller';

const router = express.Router();

router.post('/', favouritesController.addFavourite);
router.get('/:userId', favouritesController.getFavouriteProducts);
router.delete('/', favouritesController.removeFavouriteProduct);

export { router };
