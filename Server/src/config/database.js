const mongoose = require("mongoose");
const uri = process.env.URI;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to the database");
    return true;
  } catch (error) {
    console.error("Failed to connect to the database", error);
  }
};

module.exports = { connectToDatabase };
