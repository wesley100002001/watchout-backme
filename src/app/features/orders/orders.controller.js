import moment from 'moment';

export default class OrdersController {
  constructor ($state, $cookies, acl, $http, restful, $filter, $scope, $q,
    $rootScope) {
    var scope = this;
    this.restful = restful;
    this.state = $state;
    this.cookies = $cookies;
    this.rs = $rootScope;
    this.searchObj = {};

    if (!acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('login');
    }

    this.restful.getOrders()
    .then(orders => {
      this.list = orders;
      createCurPage();
    });

    this.pageSize = 25;
    this.maxSize = 10;
    this.currentPage = 1;
    var createCurPage = function () {
      scope.currentOrderList =
        $filter('filter')(scope.list, scope.searchObj)
        .slice((scope.currentPage - 1) * scope.pageSize);
    };

    $scope.$watch(angular.bind(this, function () {
      return this.currentPage;
    }), function (newVal) {
      if (!!scope.list) {
        createCurPage();
      }
    });

    $scope.$watch(angular.bind(this, function () {
      return this.searchText;
    }), function (newVal) {
      // $ means apply for all property
      if (!!scope.list && newVal.length > 0) {
        scope.searchObj = {
          $: newVal
        };
        createCurPage();
      }
    });

    this.rs.$on('filterShipStatus', function (event, request) {
      scope.searchText = '';
      scope.searchObj = !!scope.searchObj.ship_status &&
        scope.searchObj.ship_status === request ? {} : { ship_status: request };
      createCurPage();
    });

    this.rs.$on('filterStatus', function (event, request) {
      scope.searchText = '';
      scope.searchObj = !!scope.searchObj.status &&
        scope.searchObj.status === request ? {} : { status: request };
      createCurPage();
    });
  }

  shipOrder (orderId) {
    this.restful.updateOrder(orderId, {
      ship_status: 'shipped',
      ship_symbol: 'Ｏ'
    }).then(() => {
      return this.restful.getOrder(orderId);
    }).then(response => {
      this.list.forEach(order => {
        if (order.id === response.id) {
          order.ship_status = response.ship_status;
          order.ship_symbol = response.ship_symbol;
        }
      })
    });
  }

  showUnshippedOrders () {
    this.rs.$broadcast('filterShipStatus', 'notyet');
  }

  showShippedOrders () {
    this.rs.$broadcast('filterShipStatus', 'shipped');
  }

  showCanceledOrders () {
    this.rs.$broadcast('filterShipStatus', 'canceled');
  }

  showErrorOrders () {
    this.rs.$broadcast('filterShipStatus', 'error');
  }

  showSuccessOrders () {
    this.rs.$broadcast('filterStatus', 'success');
  }

  showWaitOrders () {
    this.rs.$broadcast('filterStatus', 'wait');
  }

  showFailedOrders () {
    this.rs.$broadcast('filterStatus', 'failed');
  }
}

OrdersController.$inject = ['$state', '$cookies', 'acl', '$http', 'restful',
'$filter', '$scope', '$q', '$rootScope'];
