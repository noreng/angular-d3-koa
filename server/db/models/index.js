'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const connectionUri = 'postgres://postgres:postgres@localhost/charts';
const sequelize = new Sequelize(connectionUri);

const models = {};

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
  .forEach(file => {
    let model = sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
  });
  
module.exports = models;
module.exports.sequelize = sequelize;