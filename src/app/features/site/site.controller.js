export default class SiteController {
  constructor($state, $cookies) {
    this.state = $state;
    this.cookies = $cookies;
    console.log(this.cookies.get('status'));
  }
}

SiteController.$inject = ['$state', '$cookies'];
