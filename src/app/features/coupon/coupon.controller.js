export default class CouponController {
  constructor ($state, $cookies, acl) {
    if (!acl.checkStatus($cookies.get('status'))) {
      $state.go('login');
    }
    var scope = this;
    this.cover = require('../../../assets/imgs/default-coupon-cover.jpg');
    this.info = {
      click: 0,
      end_time: new Date("2015-10-15"),
      end_time_render: "2015-10-15",
      id: "560ce1c1996b780001000003",
      intro: "牛排滿 200 送 30牛排滿 200 送 30牛排滿 200 送 30",
      name: "牛排滿 200 送 30",
      site: {
        id: "55c1dec87b63c22018000002",
        name: "凱薩帝義式餐廳-台北天母店",
        loc: {
          type: "Point",
          coordinates: [121.5248053, 25.103828]
        }
      },
      site_id: undefined,
      start_time: new Date("2015-10-01"),
      status: "normal",
      view: 0
    }

    // Datepicker options
    scope.startOpened = false;
    scope.endOpened = false;
    scope.timeOption = {
        max: new Date()
    };
    scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };
    scope.altInputFormats = ['M!/d!/yyyy'];
  }

  startOpen () {
    this.startOpened = !this.startOpened;
  }

  endOpen () {
    this.endOpened = !this.endOpened;
  }
}

CouponController.$inject = ['$state', '$cookies', 'acl'];
