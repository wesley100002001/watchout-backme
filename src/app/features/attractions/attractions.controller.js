export default class AttrsController {
  constructor ($state, $cookies, acl, $http, restful) {
    var scope = this;
    scope.state = $state;
    scope.cookies = $cookies;

    if (!acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('login');
    }

    restful.getAttrs().then(function (response) {
      scope.list = response.data.attractions;
    }, function (response) {});
  }
}

AttrsController.$inject = ['$state', '$cookies', 'acl', '$http', 'restful'];
