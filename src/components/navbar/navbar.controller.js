export default class NavbarController {
  constructor ($state, $cookies, acl, $scope) {
    this.state = $state;
    this.cookies = $cookies;
    this.scope = $scope;

    this.scope.logoSrc = require('../../assets/imgs/4freelogo.png');
    this.isLoggedIn = !!this.cookies.get('status');
  }

  logout () {
    this.cookies.remove('status');
    this.state.go('login');
  }
}

NavbarController.$inject = ['$state', '$cookies', 'acl', '$scope'];
