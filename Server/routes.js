// routes/products.js

const express = require('express');
const router = express.Router();

// Sample data for demonstration purposes
let products = [
  { id: 1, name: 'Silly Hat', price: 10.99 },
  { id: 2, name: 'Whoopee Cushion', price: 5.99 },
  // ... other products
];

// Route to get all products
router.get('/products', (req, res) => {
  res.json(products);
});

// Route to get a specific product by ID
router.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    res.json(product);
  }
});

// Route to create a new product
router.post('/products', (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Route to update a product by ID
router.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const { name, price } = req.body;
  const index = products.findIndex((p) => p.id === productId);

  if (index === -1) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    products[index] = { id: productId, name, price };
    res.json(products[index]);
  }
});

// Route to delete a product by ID
router.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === productId);

  if (index === -1) {
    res.status(404).json({ error: 'Product not found' });
  } else {
    const deletedProduct = products.splice(index, 1)[0];
    res.json(deletedProduct);
  }
});

module.exports = router;
