const express = require('express');

const shopController = require('../controllers/shop.controller');

const router = express.Router();

const {
  getProducts,
  getProduct,
  getIndex,
  getCart,
  postCart,
  getCheckout,
  getOrders,
} = shopController;

// GET - renders the home page
router.get('/', getIndex);
// GET - gets a list of all products
router.get('/products', getProducts);
// GET - get a specific product
router.get('/products/:productId', getProduct);
// GET - get the cart
router.get('/cart', getCart);
// POST - post a product to cart
router.post('/cart', postCart);
// GET - get checkout page
router.get('/checkout', getCheckout);
// GET - orders page
router.get('/orders', getOrders);

module.exports = router;
