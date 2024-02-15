const User = require("../models/User");

const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw error;
  }
};

const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw error;
  }
};

const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (userId, updatedData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updatedData },
      { new: true },
    );
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    return deletedUser;
  } catch (error) {
    throw error;
  }
};

// Additional business logic if needed

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  // Other exported functions
};
