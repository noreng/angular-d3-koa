'use strict';

const chartService = require('../services/chart.service');

exports.readById = function* (id) {
  this.body = yield chartService.readById(id);
};