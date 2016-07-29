'use strict';

import tpl from './index.html'

export default function editableChartDirective(d3) {
  return {
    restrict: 'E',
    scope: {},
    template: tpl,
    controller: controller,
    controllerAs: '$ctrl',
    link: link
  };
  
  function controller() {
    this.dataset = [1,3,1,1];
  }
  
  function link(scope, element, attr, ctrl) {
    var width = 300,
      height = 300,
      radius = Math.min(width, height) / 2;

    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var pie = d3.pie()
      .sort(null);

    var arc = d3.arc()
      .innerRadius(radius - 60)
      .outerRadius(radius - 10);

    var svg = d3.select('body').append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate( ${width / 2}, ${height / 2})`);
    
    function render(dataset) {
      // Bind
      var path = svg.selectAll('path')
        .data(pie(dataset));
        
      // Enter
      path.enter().append('path')
        .attr('fill', (d, i) => color(i))
        .attr('d', arc);
      
      // Update
      path.attr('d', arc);
      
      // Exit
      path.exit().remove();
    }
    
    render(ctrl.dataset);
    
    ctrl.reRender = function() {
      var newDataset = ctrl.dataset
        .split(',')
        .map(str => parseInt(str))
        .filter(num => !isNaN(num));
      render(newDataset)
    }
  }
}

editableChartDirective.$inject = ['d3.js'];