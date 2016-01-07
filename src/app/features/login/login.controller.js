export default class LoginController {
  constructor(randomNames, $state, $cookies) {
    // Mock user
    this.user = {
      username: 'admin',
      password: '1234'
    };
    this.random = randomNames;
    this.state = $state;
    this.cookies = $cookies;

    if (this.cookies.get('status') === 'user') {
      this.state.go('site');
    }
  }

  verifyUser() {
    if (this.username === this.user.username && this.password === this.user.password) {
      this.cookies.put('status', 'user');
      this.state.go('site');
    } else {
      this.isLoginFail = true;
    }
  }

  randomName() {
    this.name = this.random.getName();
  }
}

LoginController.$inject = ['randomNames', '$state', '$cookies'];
