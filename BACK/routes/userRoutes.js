// src/routes/userRoutes.js
const router = require('express').Router();
const userController = require('../controllers/userController');

router.route('/').get(userController.getAllUsers);
router.route('/add').post(userController.createUser);

module.exports = router;
