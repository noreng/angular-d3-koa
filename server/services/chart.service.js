'use strict';

const chart = require('../db/index').chart;

exports.readById = function* (id) {
  return yield chart.findById(id);
};