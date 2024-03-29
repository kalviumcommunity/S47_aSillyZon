const mongoose = require("mongoose");
const uri = process.env.URI;
const password = process.env.password

const connectToDatabase = async () => {
  try {
    await mongoose.connect(`mongodb+srv://somuyak:${password}@cluster0.i2b8prd.mongodb.net/aSillyZon?retryWrites=true&w=majority`);
    console.log("Connected to the database");
    return true;
  } catch (error) {
    console.error("Failed to connect to the database", error);
  }
};

module.exports = { connectToDatabase };
