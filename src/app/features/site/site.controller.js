export default class SiteController {
  constructor ($state, $stateParams, $cookies, acl, $http, $scope) {
    var scope = this;
    if (!acl.checkStatus($cookies.get('status'))) {
      $state.go('login');
    }

    $http({
      method: 'GET',
      url: 'http://localhost:5000/dashboard/api/v1/sitenew/' + $stateParams.siteId
    }).then(function (response) {
      scope.info = response.data.site;
      if (!!scope.info.official_site) {
        $scope.form.official_site.$setDirty();
      }
    }, function (response) {});

    this.cover = require('../../../assets/imgs/default-site-cover.jpg');
  }
}

SiteController.$inject = ['$state', '$stateParams', '$cookies', 'acl', '$http', '$scope']
