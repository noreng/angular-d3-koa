'use strict';

const chart = require('../db/models/').chart;

exports.create = function* (name, data) {
  return yield chart.create({
    name: name,
    data: data
  });
};

exports.readById = function* (id) {
  return yield chart.findById(id);
};