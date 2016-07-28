'use strict';

const data = require('./data.js')

exports.read = function* () {
  this.body = data;
};