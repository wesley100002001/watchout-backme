export default class AdController {
  constructor ($state, $cookies, acl, $scope) {
    if (!acl.checkStatus($cookies.get('status'))) {
      $state.go('login');
    }
    var scope = this;
    this.cover = require('../../../assets/imgs/mock-default-advertisement-cover.jpg');
    this.info = {
      CPM: 0,
      asset: "upload_bcf8946c69d2ca48a5e87a2bc11a8947.jpeg",
      balance: 0,
      click: 0,
      id: "560ce717996b780001000004",
      image: "upload_bcf8946c69d2ca48a5e87a2bc11a8947.jpeg",
      intro: "Some kind of introduction",
      mime: "image/jpeg",
      owner: "54de1401553019c5dc693100",
      price: 0,
      schedules: [{
        start_time: new Date('2015-01-01'),
        end_time: new Date('2016-01-01')
      }],
      status: "normal",
      tags: [],
      title: "Yui Aragaki",
      type: "login_300x250",
      url: "https://wefwefwewefwefwfe",
      view: 0,
      views: 57
    };

  }

  startOpen () {
    this.startOpened = !this.startOpened;
  }

  endOpen () {
    this.endOpened = !this.endOpened;
  }
}

AdController.$inject = ['$state', '$cookies', 'acl', '$scope'];
