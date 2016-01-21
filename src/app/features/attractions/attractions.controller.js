export default class AttrsController {
  constructor($state, $cookies, acl, $http) {
    var scope = this;
    scope.state = $state;
    scope.cookies = $cookies;

    if (!acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('login');
    }

    $http({
      method: 'GET',
      url: 'http://localhost:5000/dashboard/api/v1/attractions/'
    }).then(function (response) {
      scope.list = response.data.attractions;
    }, function (response) {});
  }
}

AttrsController.$inject = ['$state', '$cookies', 'acl', '$http'];
