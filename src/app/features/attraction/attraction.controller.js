export default class AttrController {
  constructor($state, $cookies, acl, $scope) {
    this.state = $state;
    this.cookies = $cookies;

    // mock site list
    this.attrlist = [
      { name: "site 1", address: "address 1" },
      { name: "site 2", address: "address 2" },
      { name: "site 3", address: "address 3" },
      { name: "site 4", address: "address 4" },
      { name: "site 5", address: "address 5" }
    ];

    if (!acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('login');
    }
  }
}

AttrController.$inject = ['$state', '$cookies', 'acl', '$scope'];
