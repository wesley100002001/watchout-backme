export default class MembersController {
  constructor ($state, $cookies, acl, $http, restful) {
    var scope = this;
    scope.state = $state;
    scope.cookies = $cookies;

    var mockMembers = [
      {
        sponsor_name: "王大頭",
        sponsor_email: "eowifjwoeifsldhf@gmail.com",
        receiver_name: "王小頭",
        receiver_phone: "0912345671",
        receiver_email: "eowifjwoeifsldhf@gmail.com",
        nation: "Taiwan",
        city: "台北市",
        postcode: "104",
        address: "松江路46巷15號"
      },
      {
        sponsor_name: "王大頭",
        sponsor_email: "eowifjwoeifsldhf@gmail.com",
        receiver_name: "王小頭",
        receiver_phone: "0912345671",
        receiver_email: "eowifjwoeifsldhf@gmail.com",
        nation: "Taiwan",
        city: "台北市",
        postcode: "104",
        address: "松江路46巷15號"
      },
      {
        sponsor_name: "王大頭",
        sponsor_email: "eowifjwoeifsldhf@gmail.com",
        receiver_name: "王小頭",
        receiver_phone: "0912345671",
        receiver_email: "eowifjwoeifsldhf@gmail.com",
        nation: "Taiwan",
        city: "台北市",
        postcode: "104",
        address: "松江路46巷15號"
      }
    ];

    if (!acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('login');
    }

    restful.getAttrs().then(function (response) {
      scope.list = response.data.attractions;
    }, function (response) {});

    this.list = mockMembers;
  }
}

MembersController.$inject = ['$state', '$cookies', 'acl', '$http', 'restful'];
