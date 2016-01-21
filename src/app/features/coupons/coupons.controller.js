export default class CouponsController {
  constructor($state, $cookies, acl, $http) {
    var scope = this;

    if (!acl.checkStatus($cookies.get('status'))) {
      $state.go('login');
    }

  }
}

CouponsController.$inject = ['$state', '$cookies', 'acl', '$http'];
