const express = require('express');

const userController = require('../controllers/userController');

const authController = require('../auth/authController');

const authMiddleware = require('../auth/authMiddleware');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router
  .route('/')
  .get(authMiddleware.isAuthenticated, userController.getAllUsers)
  .post(authMiddleware.isAuthenticated, userController.createUser)
  .patch(authMiddleware.isAuthenticated, userController.updateUser)
  .delete(authMiddleware.isAuthenticated, userController.deleteUser);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
