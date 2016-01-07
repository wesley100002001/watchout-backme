export default class SiteController {
  constructor($state, $cookies) {
    this.state = $state;
    this.cookies = $cookies;

    if (this.cookies.get('status') !== 'user') {
      this.state.go('login');
    }
  }
}

SiteController.$inject = ['$state', '$cookies'];
