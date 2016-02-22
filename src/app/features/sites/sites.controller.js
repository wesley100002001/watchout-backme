export default class SitesController {
  constructor ($state, $cookies, acl, $http, restful) {
    var scope = this;

    if (!acl.checkStatus($cookies.get('status'))) {
      $state.go('login');
    }

    restful.getSites().then(function (response) {
      console.log(response);
      scope.list = response.data;
    }, function (response) {});
  }
}

SitesController.$inject = ['$state', '$cookies', 'acl', '$http', 'restful'];
