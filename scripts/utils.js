'use strict';
const fs = require('fs');
const config = require('./config');

function getBaseImages() {
  const base = `${config.SRC_DIR}/16x16`;
  const files = fs.readdirSync(base);
  return files.filter(f => /\.png$/.test(f));
}

module.exports = {getBaseImages};
