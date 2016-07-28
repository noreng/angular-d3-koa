'use strict';

const connectionUri = 'postgres://postgres:postgres@localhost/charts';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(connectionUri);
  
module.exports = sequelize;