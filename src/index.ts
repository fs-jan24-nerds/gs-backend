import express from 'express';
import cors from 'cors';
import { router as productsRouter } from './routes/product.route.js';
const PORT = process.env.PORT || 5005;
const app = express();
app.use(cors({ origin: '*' }));
app.use('/products', express.json(), productsRouter);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
