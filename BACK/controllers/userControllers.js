// src/controllers/userController.js
const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
};

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = { name, email, password };
        await userService.createUser(newUser);
        res.json('User added!');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
};

module.exports = {
    getAllUsers,
    createUser,
};
