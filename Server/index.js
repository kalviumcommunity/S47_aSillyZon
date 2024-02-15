const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });
const { connectToDatabase } = require("./src/config/database");

connectToDatabase();
// const connectToDatabase = require("./src/config/database");

// connectToDatabase();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
