#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');

const rimraf = require('rimraf');

const config = require('./config');
const utils = require('./utils');


/**
 * generate resource file
 */
function generate() {
  console.log(`Generating codes...`);
  rimraf.sync(config.CODE_DIR);
  fs.mkdirSync(config.CODE_DIR);
  const images = {};
  utils.getBaseImages().forEach(image => {
    const basename = path.basename(image, '.png');
    const dist = `${config.CODE_DIR}/${basename}.js`;
    console.log(`Generating ${dist}...`);
    const output = `
module.exports = require('../${config.DST_DIR}/${image}');
`;
      fs.writeFileSync(dist, output);
  });
  console.log('Finish codes')
}

generate();
