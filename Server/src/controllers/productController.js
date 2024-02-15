const productService = require("../services/productService");

const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const productId = req.params.id; // Assuming the product ID is part of the request parameters
    const product = await productService.getProductById(productId);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Implement other CRUD operations if needed

module.exports = {
  getProducts,
  getProductById,
  // Other exported functions
};
