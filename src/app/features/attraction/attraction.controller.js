export default class AttrController {
  constructor($state, $cookies, acl) {
    this.state = $state;
    this.cookies = $cookies;

    if (!acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('login');
    }
  }
}

AttrController.$inject = ['$state', '$cookies', 'acl'];
