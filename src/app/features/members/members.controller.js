export default class MembersController {
  constructor ($state, $cookies, acl, $http, restful, $filter, $scope) {
    var scope = this;
    this.$scope = $scope;
    scope.state = $state;
    scope.cookies = $cookies;

    var mockMembers = [
      { sponsor_name: "Wesley Chia Wei Lin", sponsor_email: "eowifjwoeifsldhf@gmail.com", receiver_name: "王小頭", receiver_phone: "0912345671", receiver_email: "eowifjwoeifsldhf@gmail.com", nation: "Taiwan", city: "台北市", postcode: "104", address: "松江路46巷15號" },
      { sponsor_name: "王大頭", sponsor_email: "eowifjwoeifsldhf@gmail.com", receiver_name: "王小頭", receiver_phone: "0912345671", receiver_email: "eowifjwoeifsldhf@gmail.com", nation: "Taiwan", city: "台北市", postcode: "104", address: "松江路46巷15號" },
      { sponsor_name: "王大頭", sponsor_email: "eowifjwoeifsldhf@gmail.com", receiver_name: "王小頭", receiver_phone: "0912345671", receiver_email: "eowifjwoeifsldhf@gmail.com", nation: "Taiwan", city: "台北市", postcode: "104", address: "松江路46巷15號" },
      { sponsor_name: "王大頭", sponsor_email: "eowifjwoeifsldhf@gmail.com", receiver_name: "王小頭", receiver_phone: "0912345671", receiver_email: "eowifjwoeifsldhf@gmail.com", nation: "Taiwan", city: "台北市", postcode: "104", address: "松江路46巷15號" },
      { sponsor_name: "王大頭", sponsor_email: "eowifjwoeifsldhf@gmail.com", receiver_name: "王小頭", receiver_phone: "0912345671", receiver_email: "eowifjwoeifsldhf@gmail.com", nation: "Taiwan", city: "台北市", postcode: "104", address: "松江路46巷15號" },
      { sponsor_name: "王大頭", sponsor_email: "eowifjwoeifsldhf@gmail.com", receiver_name: "王小頭", receiver_phone: "0912345671", receiver_email: "eowifjwoeifsldhf@gmail.com", nation: "Taiwan", city: "台北市", postcode: "104", address: "松江路46巷15號" },
      { sponsor_name: "王大頭", sponsor_email: "eowifjwoeifsldhf@gmail.com", receiver_name: "王小頭", receiver_phone: "0912345671", receiver_email: "eowifjwoeifsldhf@gmail.com", nation: "Taiwan", city: "台北市", postcode: "104", address: "松江路46巷15號" },
      { sponsor_name: "王大頭", sponsor_email: "eowifjwoeifsldhf@gmail.com", receiver_name: "王小頭", receiver_phone: "0912345671", receiver_email: "eowifjwoeifsldhf@gmail.com", nation: "Taiwan", city: "台北市", postcode: "104", address: "松江路46巷15號" },
      { sponsor_name: "王大頭", sponsor_email: "eowifjwoeifsldhf@gmail.com", receiver_name: "王小頭", receiver_phone: "0912345671", receiver_email: "eowifjwoeifsldhf@gmail.com", nation: "Taiwan", city: "台北市", postcode: "104", address: "松江路46巷15號" },
      { sponsor_name: "大頭", sponsor_email: "eowifjwoeifsldhf@gmail.com", receiver_name: "王小頭", receiver_phone: "0912345671", receiver_email: "eowifjwoeifsldhf@gmail.com", nation: "Taiwan", city: "台北市", postcode: "104", address: "松江路46巷15號" },
      { sponsor_name: "大頭", sponsor_email: "eowifjwoeifsldhf@gmail.com", receiver_name: "王小頭", receiver_phone: "0912345671", receiver_email: "eowifjwoeifsldhf@gmail.com", nation: "Taiwan", city: "台北市", postcode: "104", address: "松江路46巷15號" },
      { sponsor_name: "大頭", sponsor_email: "eowifjwoeifsldhf@gmail.com", receiver_name: "王小頭", receiver_phone: "0912345671", receiver_email: "eowifjwoeifsldhf@gmail.com", nation: "Taiwan", city: "台北市", postcode: "104", address: "松江路46巷15號" },
      { sponsor_name: "大頭", sponsor_email: "eowifjwoeifsldhf@gmail.com", receiver_name: "王小頭", receiver_phone: "0912345671", receiver_email: "eowifjwoeifsldhf@gmail.com", nation: "Taiwan", city: "台北市", postcode: "104", address: "松江路46巷15號" },
      { sponsor_name: "大頭", sponsor_email: "eowifjwoeifsldhf@gmail.com", receiver_name: "王小頭", receiver_phone: "0912345671", receiver_email: "eowifjwoeifsldhf@gmail.com", nation: "Taiwan", city: "台北市", postcode: "104", address: "松江路46巷15號" },
      { sponsor_name: "大頭", sponsor_email: "eowifjwoeifsldhf@gmail.com", receiver_name: "王小頭", receiver_phone: "0912345671", receiver_email: "eowifjwoeifsldhf@gmail.com", nation: "Taiwan", city: "台北市", postcode: "104", address: "松江路46巷15號" },
      { sponsor_name: "大頭", sponsor_email: "eowifjwoeifsldhf@gmail.com", receiver_name: "王小頭", receiver_phone: "0912345671", receiver_email: "eowifjwoeifsldhf@gmail.com", nation: "Taiwan", city: "台北市", postcode: "104", address: "松江路46巷15號" }
    ];

    if (!acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('login');
    }

    // restful.getAttrs().then(function (response) {
    //   scope.list = response.data.attractions;
    // }, function (response) {});

    scope.list = mockMembers;
    scope.pageSize = 10;
    scope.maxSize = 10;
    scope.currentPage = 1;
    var createCurPage = function () {
      scope.currentMemberList =
        $filter('filter')(scope.list, scope.searchText)
        .slice((scope.currentPage - 1) * scope.pageSize);
    };
    createCurPage();

    $scope.$watch(angular.bind(this, function () {
      return this.currentPage;
    }), function (newVal) {
      createCurPage();
    });

    $scope.$watch(angular.bind(this, function () {
      return this.searchText;
    }), function (newVal) {
      createCurPage();
    });
  }
}

MembersController.$inject = ['$state', '$cookies', 'acl', '$http', 'restful', '$filter', '$scope'];
