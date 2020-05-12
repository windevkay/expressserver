// helper for constructing directory paths
const path = require('path');

module.exports = path.dirname(process.mainModule.filename);
