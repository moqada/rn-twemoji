'use strict';
const fs = require('fs');
const config = require('./config');

function getBaseImages(size, prefix) {
  const base = `${config.SRC_DIR}/${prefix ? `${prefix}/` : ''}${size}`;
  const files = fs.readdirSync(base);
  return files.filter(f => /\.png$/.test(f));
}

module.exports = {getBaseImages};
