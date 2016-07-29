'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import d3module from './modules/d3';

angular.module('d3App', [d3module, uiRouter])
  .config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/force-directed-graph');
    $stateProvider
      .state('force-directed-graph', {
        url: '/force-directed-graph',
        template: '<force-directed-graph graph-id="1"></force-directed-graph>'
      })
      .state('hello-d3', {
        url: '/hellod3',
        template: '<hello-d3></hello-d3>'
      })
  }]);