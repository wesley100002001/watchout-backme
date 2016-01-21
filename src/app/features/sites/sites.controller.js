export default class SitesController {
  constructor ($state, $cookies, acl, $http) {
    var scope = this;

    if (!acl.checkStatus($cookies.get('status'))) {
      $state.go('login');
    }

    $http({
      method: 'GET',
      url: 'http://localhost:5000/dashboard/api/v1/sites/'
    }).then(function (response) {
      scope.list = response.data.sites;
    }, function (response) {});
  }
}

SitesController.$inject = ['$state', '$cookies', 'acl', '$http'];
