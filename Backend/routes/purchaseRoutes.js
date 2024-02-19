const express = require('express');

const purchaseController = require('../controllers/purchaseController');
const { checkRole, isAuthenticated } = require('../auth/authMiddleware');
const router = express.Router();

router
  .route('/')
  .get(isAuthenticated, purchaseController.getAllPurchases)
  .post(checkRole('admin'), purchaseController.createPurchase);

router
  .route('/:id')
  .get(isAuthenticated, purchaseController.getPurchase)
  .patch(checkRole('admin'), purchaseController.updatePurchase)
  .delete(checkRole('admin'), purchaseController.deletePurchase);

module.exports = router;
