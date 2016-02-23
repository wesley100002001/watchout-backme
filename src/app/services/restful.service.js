import angular from 'angular';

class Restful {
  constructor ($http) {
    this.http = $http;
    this.api = 'http://pilot-hi-1.4free.com.tw/api/';
    this.mockApi = 'http://localhost:5000/dashboard/api/v1/';
  }

  getSites () {
    return this.http({
      method: 'GET',
      url: this.api + 'sites/'
    });
  }

  getActs () {
    return this.http({
      method: 'GET',
      url: this.mockApi + 'activities/'
    });
  }

  getAttrs () {
    return this.http({
      method: 'GET',
      url: this.mockApi + 'attractions/'
    });
  }
}

export default angular.module('services.restful', [])
  .service('restful', Restful)
  .name;
