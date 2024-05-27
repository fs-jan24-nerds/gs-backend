import express from 'express';
import cors from 'cors';
import { router as productsRouter } from './routes/product.route.js';
import { router as userRouter } from './routes/users.route.js';
import { router as favouritesRouter } from './routes/favourites.route.js';

const PORT = process.env.PORT || 5005;
const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/products', productsRouter);
app.use('/auth', userRouter);
app.use('/favourites', favouritesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
