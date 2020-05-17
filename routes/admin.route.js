const express = require('express');

const adminController = require('../controllers/admin.controller');

const router = express.Router();

const {
  getAddProduct,
  postAddProduct,
  getProducts,
  getEditProduct,
} = adminController;

// GET - routes to the add product page
router.get('/add-product', getAddProduct);
// GET - get all admin products
router.get('/products', getProducts);
// POST - takes data posted from the add products page and routes to home page
router.post('/add-product', postAddProduct);
// GET - fetch the route and display page to edit products
router.get('/edit-product/:productId', getEditProduct);

module.exports = router;
