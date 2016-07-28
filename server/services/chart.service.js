'use strict';

const chart = require('../db/models/').chart;

exports.readById = function* (id) {
  return yield chart.findById(id);
};