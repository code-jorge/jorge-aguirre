'use strict';

const sign = require('./sign');
const split = require('./words');

const createSign = (message) => {
  const words = split(message);
  return sign(words);
}

module.exports = createSign;