#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');

const mkdirp = require('mkdirp');
const rimraf = require('rimraf');

const config = require('./config');
const utils = require('./utils');


/**
 * generate resource file
 */
function generate(conf) {
  console.log(`Generating codes...`);
  rimraf.sync(conf.CODE_DIR);
  mkdirp.sync(conf.CODE_DIR);
  const images = {};
  utils.getBaseImages(conf.BASE_SIZE).forEach(image => {
    const basename = path.basename(image, '.png');
    const dist = `${conf.CODE_DIR}/${basename}.js`;
    console.log(`Generating ${dist}...`);
    const output = `
module.exports = require('${conf.IMG_DIR}/${image}');
`;
      fs.writeFileSync(dist, output);
  });
  console.log('Finish codes')
}

generate(config.DEFAULT);
generate(config.VER1);
generate(config.VER2);
