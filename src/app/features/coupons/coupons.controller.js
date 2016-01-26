export default class CouponsController {
  constructor($state, $cookies, acl, $http) {
    var scope = this;

    if (!acl.checkStatus($cookies.get('status'))) {
      $state.go('login');
    }

    // mock site list
    scope.list = [
      { id: '111', name: "site 1", address: "address 1" },
      { id: '222', name: "site 2", address: "address 2" },
      { id: '333', name: "site 3", address: "address 3" },
      { id: '444', name: "site 4", address: "address 4" },
      { id: '555', name: "site 5", address: "address 5" }
    ];
  }
}

CouponsController.$inject = ['$state', '$cookies', 'acl', '$http'];
