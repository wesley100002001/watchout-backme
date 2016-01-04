export default class LoginController {
  constructor(randomNames, $state) {
    // Mock user
    this.user = {
      username: 'admin',
      password: '1234'
    };
    this.random = randomNames;
    this.state = $state;
  }

  verifyUser() {
    if (this.username === this.user.username && this.password === this.user.password) {
      // XXX: should go somewhere else
      this.state.go('home');
    } else {
      this.isLoginFail = true;
    }
  }

  randomName() {
    this.name = this.random.getName();
  }
}

LoginController.$inject = ['randomNames', '$state'];
