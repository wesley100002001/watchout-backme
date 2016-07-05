export default class OrdersController {
  constructor ($state, $cookies, acl, $http, restful, $filter, $scope) {
    var scope = this;
    scope.state = $state;
    scope.cookies = $cookies;

    var mockOrders = [
      { id: "146379563061648", sponsor_name: "林華芳", sponsor_email: "leo0179@yahoo.com.tw", pay: "成功", ship: "尚未出貨", pay_time: "2016-06-22 00:17:21" },
      { id: "146379563061649", sponsor_name: "林華芳", sponsor_email: "leo0179@yahoo.com.tw", pay: "等待", ship: "無", pay_time: "2016-06-22 00:17:21" },
      { id: "146379563061650", sponsor_name: "林華芳", sponsor_email: "leo0179@yahoo.com.tw", pay: "失敗", ship: "無", pay_time: "2016-06-22 00:17:21" },
      { id: "146379563061652", sponsor_name: "林華芳", sponsor_email: "leo0179@yahoo.com.tw", pay: "成功", ship: "尚未出貨", pay_time: "2016-06-22 00:17:21" },
      { id: "146379563061641", sponsor_name: "林華芳", sponsor_email: "leo0179@yahoo.com.tw", pay: "成功", ship: "尚未出貨", pay_time: "2016-06-22 00:17:21" },
      { id: "146379563061642", sponsor_name: "Test", sponsor_email: "leo0179@yahoo.com.tw", pay: "成功", ship: "尚未出貨", pay_time: "2016-06-22 00:17:21" },
      { id: "146379563061643", sponsor_name: "林華芳", sponsor_email: "leo0179@yahoo.com.tw", pay: "成功", ship: "尚未出貨", pay_time: "2016-06-22 00:17:21" },
      { id: "146379563061644", sponsor_name: "林華芳", sponsor_email: "leo0179@yahoo.com.tw", pay: "成功", ship: "尚未出貨", pay_time: "2016-06-22 00:17:21" },
      { id: "146379563061645", sponsor_name: "Unknown", sponsor_email: "leo0179@yahoo.com.tw", pay: "成功", ship: "尚未出貨", pay_time: "2016-06-22 00:17:21" },
      { id: "146379563061646", sponsor_name: "林華芳", sponsor_email: "leo0179@yahoo.com.tw", pay: "成功", ship: "尚未出貨", pay_time: "2016-06-22 00:17:21" },
      { id: "146379563061647", sponsor_name: "Ned Stark", sponsor_email: "leo0179@yahoo.com.tw", pay: "成功", ship: "尚未出貨", pay_time: "2016-06-22 00:17:21" },
      { id: "146379563061698", sponsor_name: "Cersei Lannister", sponsor_email: "leo0179@yahoo.com.tw", pay: "成功", ship: "尚未出貨", pay_time: "2016-06-22 00:17:21" },
      { id: "146379563023423", sponsor_name: "林華芳", sponsor_email: "leo0179@yahoo.com.tw", pay: "成功", ship: "尚未出貨", pay_time: "2016-06-22 00:17:21" },
      { id: "146379563065799", sponsor_name: "林華芳", sponsor_email: "leo0179@yahoo.com.tw", pay: "成功", ship: "尚未出貨", pay_time: "2016-06-22 00:17:21" },
      { id: "146379512838384", sponsor_name: "林華芳", sponsor_email: "leo0179@yahoo.com.tw", pay: "成功", ship: "尚未出貨", pay_time: "2016-06-22 00:17:21" }
    ];
    if (!acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('login');
    }

    // restful.getAttrs().then(function (response) {
    //   scope.list = response.data.attractions;
    // }, function (response) {});

    scope.list = mockOrders;
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

OrdersController.$inject = ['$state', '$cookies', 'acl', '$http', 'restful', '$filter', '$scope'];
