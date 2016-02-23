export default class ActsController {
  constructor ($state, $cookies, acl, $scope, $http, restful) {
    var scope = this;
    this.state = $state;
    this.cookies = $cookies;

    if (!acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('login');
    }

    restful.getActs().then(function (response) {
      scope.list = response.data.activities;
    }, function (response) {});
  }
}

ActsController.$inject = ['$state', '$cookies', 'acl', '$scope', '$http', 'restful'];
