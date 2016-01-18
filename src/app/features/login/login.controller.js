export default class LoginController {
  constructor ($state, $cookies, acl) {
    // Mock user
    this.user = {
      username: 'admin',
      password: '1234'
    };
    this.state = $state;
    this.cookies = $cookies;

    if (acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('sites');
    }
  }

  verifyUser () {
    if (this.username === this.user.username && this.password === this.user.password) {
      this.cookies.put('status', 'user');
      this.state.go('sites');
    } else {
      this.isLoginFail = true;
    }
  }
}

LoginController.$inject = ['$state', '$cookies', 'acl'];
