export default class OrdersController {
  constructor ($state, $cookies, acl, $http, restful) {
    var scope = this;
    scope.state = $state;
    scope.cookies = $cookies;

    var mockOrders = [
      {
        id: "146379563061648",
        sponsor_name: "林華芳",
        sponsor_email: "leo0179@yahoo.com.tw",
        pay: "成功",
        ship: "尚未出貨",
        pay_time: "2016-06-22 00:17:21"
      },
      {
        id: "146379563061649",
        sponsor_name: "林華芳",
        sponsor_email: "leo0179@yahoo.com.tw",
        pay: "等待",
        ship: "無",
        pay_time: "2016-06-22 00:17:21"
      },
      {
        id: "146379563061650",
        sponsor_name: "林華芳",
        sponsor_email: "leo0179@yahoo.com.tw",
        pay: "失敗",
        ship: "無",
        pay_time: "2016-06-22 00:17:21"
      },
      {
        id: "146379563061651",
        sponsor_name: "林華芳",
        sponsor_email: "leo0179@yahoo.com.tw",
        pay: "成功",
        ship: "尚未出貨",
        pay_time: "2016-06-22 00:17:21"
      }
    ];
    if (!acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('login');
    }

    restful.getAttrs().then(function (response) {
      scope.list = response.data.attractions;
    }, function (response) {});

    this.list = mockOrders;
  }
}

OrdersController.$inject = ['$state', '$cookies', 'acl', '$http', 'restful'];
