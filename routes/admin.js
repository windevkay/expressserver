/* eslint-disable no-unused-vars */
const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.sendFile(
    path.join(__dirname, '../', 'views', 'add-product.html'),
  );
});

router.post('/add-product', (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
