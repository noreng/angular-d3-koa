'use strict';

const chartService = require('../services/chart.service');

exports.create = function* () {
  let chartData = this.request.body;
  this.body = yield chartService.create(chartData.name, chartData.data);
};

exports.readById = function* (id) {
  this.body = yield chartService.readById(id);
};