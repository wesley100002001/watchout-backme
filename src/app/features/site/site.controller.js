export default class SiteController {
  constructor($state, $cookies, acl) {
    this.state = $state;
    this.cookies = $cookies;

    if (!acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('login');
    }
  }
}

SiteController.$inject = ['$state', '$cookies', 'acl'];
