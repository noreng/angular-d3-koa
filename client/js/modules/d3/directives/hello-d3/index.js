'use strict';

export default function helloD3Directive(d3) {
  return {
    restrict: 'E',
    scope: {},
    link: link
  };

  function link(scope, element) {
    d3.select(element[0]).append('h2')
      .text('Hello D3!');
  }
}

helloD3Directive.$inject = ['d3.js'];