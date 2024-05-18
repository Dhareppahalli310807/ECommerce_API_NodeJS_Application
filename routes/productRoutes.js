import express from 'express';
import {
  createProduct,
  getProducts,
  deleteProduct,
  updateProductQuantity
} from '../controllers/productController.js';

const router = express.Router();

router.post('/create', createProduct);
router.get('/', getProducts);
router.delete('/:id', deleteProduct);
router.post('/:id/update_quantity', updateProductQuantity);

export default router;
