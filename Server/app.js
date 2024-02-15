const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./src/routes/productRoutes");
const userRoutes = require("./src/routes/userRoutes");

const app = express();

// Use middleware
app.use(bodyParser.json());
// Implement other middleware as needed

// Use routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
