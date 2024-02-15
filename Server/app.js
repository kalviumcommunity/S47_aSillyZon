const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("./src/routes/productRoutes");
const userRoutes = require("./src/routes/userRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
// Use middleware
app.use(bodyParser.json());
// Implement other middleware as needed

// Use routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
