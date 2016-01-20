export default class SiteController {
  constructor ($state, $cookies, acl) {
    // mock site
    this.info = {
      address: "台北市士林區中山北路6段43號",
      category: "餐廳",
      email1: "jason@barox.com.tw",
      hotspots: [{
        id: "10001022",
        name: "凱薩帝義式餐廳-台北天母店",
        ssid: ""
      }],
      id: "55c1dec87b63c22018000002",
      image: "upload_4dacf6e38708cdba53643933bea3aafa.jpeg",
      intro: "新垣結衣（1988年6月11日－）是出身於日本沖繩縣那霸市的女演員、歌手及模特兒，身高169cm，現為日本LesPros娛樂旗下的藝人。",
      loc: {
        type: "Point",
        coordinates: [121.5248053, 25.103828]
      },
      maintainer: "vincent.lin",
      matched_areas: ["547cbfae8538c9700e4856ae", "547cbfae8538c9700e4856b0", "547cbfae8538c9700e4856b1", "552e887a8538c927678c03a7", "552e887a8538c927678c03b2"],
      name: '新垣結衣後援會',
      normalized_address: "111台灣台北市士林區中山北路六段43號",
      official_site: "http://www.casade.com.tw/",
      options: {
        show_coupon: true
      },
      status: "normal",
      tel1: "02-28749790",
      tel2: "0934191888",
      zip: "111"
    };

    this.cover = require('../../../assets/imgs/default-site-cover.jpg');
    if (!acl.checkStatus($cookies.get('status'))) {
      $state.go('login');
    }
  }
}

SiteController.$inject = ['$state', '$cookies', 'acl']
