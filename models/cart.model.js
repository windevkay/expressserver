/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/path');

const pathToData = path.join(rootDir, 'data', 'cart.json');

module.exports = class Cart {
  static addProduct(id, productPrice) {
    fs.readFile(pathToData, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id,
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty += 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id, qty: 1 };
        cart.products = [...cart.products, updatedProduct];
      }
      // eslint-disable-next-line operator-assignment
      cart.totalPrice = cart.totalPrice + +productPrice;

      fs.writeFile(pathToData, JSON.stringify(cart), (error) => {
        console.error(error);
      });
    });
  }
};
