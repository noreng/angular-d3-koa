import angular from 'angular';
import * as d3 from 'd3';

import helloD3Directive from './directives/hello-d3';

export default angular.module('d3module', [])
  .factory('d3.js', [() => d3])
  .directive('helloD3', helloD3Directive)
  .name;