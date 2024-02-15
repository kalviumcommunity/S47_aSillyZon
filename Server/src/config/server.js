const express = require("express");
const bodyParser = require("body-parser");
const productRoutes = require("../routes/productRoutes");
const userRoutes = require("../routes/userRoutes");

const app = express();

// Use middleware
app.use(bodyParser.json());
// Implement other middleware as needed

// Use routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
