export default class LoginController {
  constructor ($state, $cookies, acl, restful, $scope) {
    this.state = $state;
    this.cookies = $cookies;
    this.restful = restful;

    if (acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('home');
    }
  }

  verifyUser () {
    this.logging = true;
    var cookies = this.cookies;
    var state = this.state;
    this.restful.getAdmin(this.username, this.password)
    .then(authorized => {
      if (authorized !== 'unauthorized') {
        cookies.put('status', authorized);
        state.go('home');
      } else {
        this.logging = false;
        this.isLoginFail = true;
      }
    });
  }
}

LoginController.$inject = ['$state', '$cookies', 'acl', 'restful', '$scope'];
