import angular from 'angular';
import * as d3 from 'd3';

export default angular.module('d3module', [])
  .factory('d3.js', [() => d3])
  .name;