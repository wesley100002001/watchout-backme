export default class AttrController {
  constructor ($state, $cookies, acl) {
    this.info = {
      address: "253新北市石門區德茂里下員坑33-6號",
      id: "559e42957b63c23a8a0001d2",
      image: "upload_f4908afa4c9cd1ef4b61cb383a5e4638.jpeg",
      intro: "白沙灣，介位麟山鼻與富貴角間，佔地廣大，白沙灣海水浴場位於石門區德茂村沿岸(淡水河口北岸， 2號省道23公里處)，沙灘寬闊綿延一公里長，以沙質潔白、海水清澈聞名，還有它擁有全省獨一無二屬特粗的沙粒沙質，因長期風蝕沙灘旁有許多凸起的風稜石，浴場內設備更是齊全，備有更衣室、餐飲部、休憩區、泳具出租部等；除了游泳、釣魚外還有帆船、潛水、風浪板等新潮水上活動，而附近的山坡斜度適合風又大，也成為滑翔翼、跳傘活動的良好場所，時常可見彩翼翱翔其上，每到炎夏季節讓來此的遊客，可享盡上天下海、乘風破浪的多重樂趣。",
      loc: {
        type: "Point",
        coordinates: [121.5190504, 25.2833642]
      },
      name: "白沙灣",
      normalized_address: "253台灣新北市石門區下員坑路33之6號交通部觀光局北海岸及觀音山國家風景區管理處",
      status: "normal",
      url: "http://travel.network.com.tw/tourguide/point/showpage/127.html",
      zip: "253"
    }
    this.cover = require('../../../assets/imgs/default-attraction-cover.jpg');

    if (!acl.checkStatus($cookies.get('status'))) {
      $state.go('login');
    }
  }
}

AttrController.$inject = ['$state', '$cookies', 'acl'];
