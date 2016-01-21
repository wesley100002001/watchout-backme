export default class ActsController {
  constructor($state, $cookies, acl, $scope, $http) {
    var scope = this;
    this.state = $state;
    this.cookies = $cookies;

    if (!acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('login');
    }

    $http({
      method: 'GET',
      url: 'http://localhost:5000/dashboard/api/v1/activities/'
    }).then(function success(response) {
      scope.list = response.data.activities;
    }, function (response) {});
  }
}

ActsController.$inject = ['$state', '$cookies', 'acl', '$scope', '$http'];
