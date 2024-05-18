import Product from '../models/productModel.js';

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = new Product({ name, quantity });
    await product.save();
    res.status(201).json({ data: { product } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// List all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ data: { products } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ data: { message: 'Product deleted' } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update product quantity
export const updateProductQuantity = async (req, res) => {
  try {
    const { number } = req.query;
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    product.quantity += parseInt(number, 10);
    await product.save();
    res.status(200).json({ data: { product, message: 'Updated successfully' } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
