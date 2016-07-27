'use strict';

import graphData from './data.js';

export default class ChartDataService {

  constructor() {
    this.data = graphData
  }

  load() {
    return Promise.resolve(this.data);
  }

}