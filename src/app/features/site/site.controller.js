export default class SiteController {
  constructor($state) {
    this.user = {
      username: 'admin',
      password: '1234'
    };
    this.state = $state;
  }
}

LoginController.$inject = ['$state'];
