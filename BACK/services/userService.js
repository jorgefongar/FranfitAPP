// src/services/userService.js
const User = require('../models/user.model');

const getAllUsers = async () => {
    return User.find();
};

const createUser = async (userData) => {
    const user = new User(userData);
    return user.save();
};

module.exports = {
    getAllUsers,
    createUser,
};
