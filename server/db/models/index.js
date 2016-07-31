'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const connectionUri = 'postgres://postgres:postgres@localhost/charts';
const sequelize = new Sequelize(connectionUri);

const chartData = require('../init/data.json');

const models = {};

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach(file => {
    let model = sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
  });
  
function initChartData() {
  models.chart
    .findAndCountAll()
    .then(result => {
      if (result.count === 0) {
        models.chart.create(chartData);
      }
  });
}
  
module.exports = models;
module.exports.initChartData = initChartData;
module.exports.sequelize = sequelize;