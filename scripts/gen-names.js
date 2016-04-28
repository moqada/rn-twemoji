#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');

const emojifile = require('node-emoji/lib/emojifile');
const rimraf = require('rimraf');

const config = require('./config');
const utils = require('./utils');

const DST_FILE = './names.js';
const UNICODE_LENGTH = 4;


/**
 * generate resource file
 */
function generate() {
  console.log(`Generating names...`);
  rimraf.sync(config.NAME_DIR);
  fs.mkdirSync(config.NAME_DIR);
  const names = {};
  utils.getBaseImages().forEach(image => {
    const basename = path.basename(image, '.png');
    const emojiKey = basename.split('-').map(code => {
      if (code.length < UNICODE_LENGTH) {
        return `${'0'.repeat(UNICODE_LENGTH - code.length)}${code}`;
      }
      return code;
    }).join('-');
    const data = emojifile.data[emojiKey];
    if (!data) {
      console.log(`skipping ${basename}...`);
      return undefined;
    }
    data[3].forEach(name => {
      if (names[name]) {
        throw Error(`Duplicate emoji name: ${name}`);
      }
      const dist = `${config.NAME_DIR}/${name}.js`;
      const output = `
module.exports = require('../${config.DST_DIR}/${image}');
`;
      console.log(`Generating ${dist}...`);
      fs.writeFileSync(dist, output);
    });
    return undefined;
  });
  console.log('Finish names');
}

generate();
