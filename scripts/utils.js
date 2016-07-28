'use strict';
const fs = require('fs');
const config = require('./config');

function getBaseImages(size) {
  const base = `${config.SRC_DIR}/${size}`;
  const files = fs.readdirSync(base);
  return files.filter(f => /\.png$/.test(f));
}

module.exports = {getBaseImages};
