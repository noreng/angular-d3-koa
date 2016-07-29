'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import d3module from './modules/d3';

angular.module('d3App', [d3module, uiRouter])
  .config([ '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/editable-chart');
    $stateProvider
      .state('force-directed-graph', {
        url: '/force-directed-graph',
        template: '<force-directed-graph graph-id="1"></force-directed-graph>'
      })
      .state('hello-d3', {
        url: '/hellod3',
        template: '<hello-d3></hello-d3>'
      })
      .state('editable-chart', {
        url: '/editable-chart',
        template: '<editable-chart></editable-chart>'
      })
  }]);