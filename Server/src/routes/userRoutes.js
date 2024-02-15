const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.post("/create", userController.createUser);
// Implement other user routes

module.exports = router;
