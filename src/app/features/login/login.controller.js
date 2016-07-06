export default class LoginController {
  constructor ($state, $cookies, acl, restful) {
    // Mock user
    this.user = {
      username: 'admin',
      password: '1234'
    };
    this.state = $state;
    this.cookies = $cookies;
    this.restful = restful;

    if (acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('home');
    }

    this.loginBtnImg = require('../../../assets/imgs/login_btn.gif');
  }

  verifyUser () {
    var cookies = this.cookies;
    var state = this.state;
    this.restful.getAdmin(this.username, this.password)
    .then(function (passed) {
      if (passed) {
        cookies.put('status', 'user');
        state.go('home');
      } else {
        this.isLoginFail = true;
      }
    });
  }
}

LoginController.$inject = ['$state', '$cookies', 'acl', 'restful'];
