export default class AttrController {
  constructor ($state, $stateParams, $cookies, acl, $http) {
    var scope = this;

    if (!acl.checkStatus($cookies.get('status'))) {
      $state.go('login');
    }

    $http({
      method: 'GET',
      url: 'http://localhost:5000/dashboard/api/v1/attraction/' + $stateParams.attrId
    }).then(function (response) {
      scope.info = response.data.attraction;
    }, function (response) {});

    this.cover = require('../../../assets/imgs/default-attraction-cover.jpg');
  }
}

AttrController.$inject = ['$state', '$stateParams', '$cookies', 'acl', '$http'];
