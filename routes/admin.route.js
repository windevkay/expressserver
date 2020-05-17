const express = require('express');

const productsController = require('../controllers/products.controller');

const router = express.Router();

const { getAddProduct, postAddProduct } = productsController;

// GET - Routes to the add product page
router.get('/add-product', getAddProduct);

// POST - Takes data posted from the add products page and routes to home page
router.post('/add-product', postAddProduct);

module.exports = router;
