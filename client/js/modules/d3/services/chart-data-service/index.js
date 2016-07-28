'use strict';

export default class ChartDataService {

  constructor($http) {
    this._$http = $http;
  }

  load() {
    return this._$http
      .get('/api/read/')
      .then((response) => response.data);
  }

}

ChartDataService.$inject = ['$http'];