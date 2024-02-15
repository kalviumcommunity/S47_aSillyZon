const Product = require("../models/Product");

const getProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw error;
  }
};

const getProductById = async (productId) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    throw error;
  }
};

const createProduct = async (productData) => {
  try {
    const newProduct = new Product(productData);
    const savedProduct = await newProduct.save();
    return savedProduct;
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (productId, updatedData) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $set: updatedData },
      { new: true },
    );
    return updatedProduct;
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (productId) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    return deletedProduct;
  } catch (error) {
    throw error;
  }
};

// Additional business logic if needed

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
