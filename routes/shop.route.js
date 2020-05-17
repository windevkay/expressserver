const express = require('express');

const productsController = require('../controllers/products.controller');

const router = express.Router();

const { getProducts } = productsController;

// GET - renders the home page and all products
router.get('/', getProducts);

module.exports = router;
