export default class MembersController {
  constructor ($state, $cookies, acl, $http, restful, $filter, $scope) {
    var scope = this;
    this.$scope = $scope;
    this.state = $state;
    this.cookies = $cookies;
    this.restful = restful;

    if (!acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('login');
    }

    this.columnOrder = ['id', 'name', 'email', 'receiver_phone',
    'country', 'city', 'postcode', 'receiver_name', 'receiver_email', 'receiver_address'];

    this.columnHead = ['贊助者ID', '贊助者姓名', '贊助者email', '收件者電話', '所在國家',
    '居住城市', '郵遞區號', '收件者姓名', '收件者email', '收件者地址'];

    var list = [];
    this.restful.getMembers()
    .then(members => {
      angular.forEach(members, function (value, key) {
        list.push(value);
      });
      scope.list = list;
      createCurPage();
    });

    scope.pageSize = 10;
    scope.maxSize = 10;
    scope.currentPage = 1;
    var createCurPage = function () {
      scope.currentMemberList =
        $filter('filter')(scope.list, scope.searchText)
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
      if (!!scope.list) {
        createCurPage();
      }
    });
  }

  exportMembers () {
    return this.restful.getMembers()
    .then(members => {
      var memberCsv = members.map(function (member) {
        return {
          id: member.id,
          name: member.name,
          email: member.email,
          receiver_phone: member.receiver_phone,
          country: member.country,
          city: member.city,
          postcode: member.postcode,
          receiver_name: member.receiver_name,
          receiver_email: member.receiver_email,
          address: member.address
        };
      });
      return memberCsv;
    })
  }
}

MembersController.$inject = ['$state', '$cookies', 'acl', '$http', 'restful', '$filter', '$scope'];
