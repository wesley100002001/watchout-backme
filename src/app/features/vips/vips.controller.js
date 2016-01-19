export default class VipsController {
  constructor ($state, $cookies, acl) {
    this.state = $state;
    this.cookies = $cookies;

    // mock site list
    this.list = [
      { id: '111', name: "site 1", address: "address 1" },
      { id: '222', name: "site 2", address: "address 2" },
      { id: '333', name: "site 3", address: "address 3" },
      { id: '444', name: "site 4", address: "address 4" },
      { id: '555', name: "site 5", address: "address 5" }
    ];

    if (!acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('login');
    }
  }
}

VipsController.$inject = ['$state', '$cookies', 'acl'];
