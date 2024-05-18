import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes.js';

const server = express();
const port = 8080;

server.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

server.use('/products', productRoutes);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
