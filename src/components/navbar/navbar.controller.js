export default class NavbarController {
  constructor ($state, $cookies, acl, $scope) {
    this.state = $state;
    this.cookies = $cookies;
    this.scope = $scope;

    this.scope.logoSrc = require('../../assets/imgs/4freelogo.png');
  }
}

NavbarController.$inject = ['$state', '$cookies', 'acl', '$scope'];
