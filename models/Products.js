const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  ProductID: String,
  ProductName: String,
  Description: String,
  Price: Number,
  Quantity: Number
});

const ProductModel = mongoose.model("List of silly products", ProductSchema);

module.exports = ProductModel;
