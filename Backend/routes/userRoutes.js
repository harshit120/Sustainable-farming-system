const express = require('express');

const userController = require('../controllers/userController');
const authController = require('../auth/authController');
const {
  checkRole,
  checkUserOrAdmin,
  fetchUser,
} = require('../auth/authMiddleware');

const router = express.Router();

// Public routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);

// Admin routes
router
  .route('/')
  .get(checkRole('admin'), userController.getAllUsers) // Get all users
  .post(checkRole('admin'), userController.createUser); // Create a new user

router
  .route('/:id')
  .get(fetchUser, checkUserOrAdmin, userController.getUser) // Get a specific user
  .patch(checkRole('admin'), userController.updateUser) // Update a specific user
  .delete(checkRole('admin'), userController.deleteUser); // Delete a specific user

router.patch('/admin/:id', checkRole('admin'), userController.grantAdminRole);

module.exports = router;
