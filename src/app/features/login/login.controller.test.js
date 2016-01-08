import login from './index';
import ngCookies from 'angular-cookies';

describe('Controller: Login', function () {
  let $controller;

  beforeEach(angular.mock.module(login, ngCookies));

  beforeEach(angular.mock.inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  it('mock username is admin', function () {
    let ctrl = $controller('LoginController');
    expect(ctrl.user.username).toBe('admin');
  });
});
