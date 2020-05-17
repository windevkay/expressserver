const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/path');

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const pathToData = path.join(rootDir, 'data', 'products.json');
    fs.readFile(pathToData, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(pathToData, JSON.stringify(products), (error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
    });
  }

  static fetchAll(callback) {
    const pathToData = path.join(rootDir, 'data', 'products.json');
    fs.readFile(pathToData, (err, fileContent) => {
      if (err) {
        callback([]);
      }
      callback(JSON.parse(fileContent));
    });
  }
};
