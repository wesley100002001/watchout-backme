import angular from 'angular';

class ACL {
  constructor () {}

  checkStatus (cookies) {
    return cookies === 'user';
  }
}

export default angular.module('services.acl', [])
  .service('acl', ACL)
  .name;
