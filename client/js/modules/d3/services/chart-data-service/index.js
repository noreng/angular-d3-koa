'use strict';

export default class ChartDataService {

  constructor($http) {
    this._$http = $http;
  }

  loadById(id) {
    return this._$http
      .get('/api/read/' + id)
      .then((response) => response.data);
  }

}

ChartDataService.$inject = ['$http'];