export default class CouponController {
  constructor ($state, $cookies, acl) {
    this.info = {
      click: 0,
      end_time: "2015-10-15T16:00:00Z",
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
      start_time: "2015-10-01",
      status: "normal",
      view: 0
    }
    this.cover = require('../../../assets/imgs/default-coupon-cover.jpg');

    if (!acl.checkStatus($cookies.get('status'))) {
      $state.go('login');
    }
  }
}

CouponController.$inject = ['$state', '$cookies', 'acl'];
