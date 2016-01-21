export default class ActController {
  constructor ($state, $stateParams, $cookies, acl, $http) {
    var scope = this;
    scope.cardCover = require('../../../assets/imgs/default-activity-cover.jpg');
    scope.infoCover = require('../../../assets/imgs/mock-700x300.jpg');
    if (!acl.checkStatus($cookies.get('status'))) {
      $state.go('login');
    }
    $http({
      method: 'GET',
      url: 'http://localhost:5000/dashboard/api/v1/activities/' + $stateParams.actId
    }).then(function success(response) {
      scope.info = response.data.activity;
    }, function (response) {});
  }
}

ActController.$inject = ['$state', '$stateParams', '$cookies', 'acl', '$http'];
