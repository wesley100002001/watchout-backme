import angular from 'angular';

class ACL {
  constructor () {}

  checkStatus (cookies) {
    return cookies === 'user' || cookies === 'admin';
  }

  checkAdminStatus (cookies) {
    return cookies === 'admin';
  }
}

export default angular.module('services.acl', [])
  .service('acl', ACL)
  .name;
