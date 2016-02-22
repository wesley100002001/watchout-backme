import angular from 'angular';

class Restful {
  constructor ($http) {
    this.http = $http;
    this.api = 'http://pilot-hi-1.4free.com.tw/api/';
  }

  getSites () {
    return this.http({
      method: 'GET',
      url: this.api + 'sites/'
    });
  }
}

export default angular.module('services.restful', [])
  .service('restful', Restful)
  .name;
