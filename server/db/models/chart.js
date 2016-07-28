'use strict';

module.exports = function (sequelize, DataTypes) {
  let chart = sequelize.define('chart', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false
    }
  });

  return chart;
};