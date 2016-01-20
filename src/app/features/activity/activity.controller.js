export default class ActController {
  constructor () {
    this.info = {
      address: "新竹縣竹北市吳濁流路56號",
      bannerimage: "upload_77bf23d2edcf2a357478c1cdcf6b924d.jpeg",
      end_time: "2015-09-22T16:00:00Z",
      end_time_render: "2015-09-22",
      id: "55c977c57b63c25cd600007d",
      image: "upload_214721f8802f739ca1a52211bd28ed80.jpeg",
      intro: "【遇見新樂園-新竹縣百年生活展】 ↵展場共分為兩大部分：『新竹大不同』：詳載了日治時期茶、糖、樟腦產業發展、醫療衛生、交通運輸、新式學校教育的衝擊、1935年大地震的破壞力及農村勤儉樸實的生活歷史樣貌，重現百年生活型態。 ↵『當代新樂園』：包含地方文化館小驚喜、新竹特色節慶、新竹體感輕旅遊等裝置，帶領民眾穿越古今，體驗不一樣的文化旅行。",
      loc: {
        type: "Point",
        coordinates: [121.0138803, 24.8310469]
      },
      name: "【遇見新樂園-新竹縣百年生活展】",
      normalized_address: "302台灣新竹縣竹北市吳濁流路56號",
      other: "▇ 活動時間：2012-10-31~2015-10-31　　每週二～週日 am 09：00～12：00 ；pm13：30～17：00 （週一以及民俗節日休館）↵↵▇ 活動地點：新竹縣縣史館（新竹縣竹北市縣政九路146號）↵↵▇ 主辦單位：新竹縣政府、新竹縣議會",
      promoted: 0,
      start_time: "2015-08-25",
      status: "normal",
      type: "",
      url: "http://www.hchcc.gov.tw/ch/paradise/",
      zip: "302"
    }
    this.cardCover = require('../../../assets/imgs/default-activity-cover.jpg');
    this.infoCover = require('../../../assets/imgs/mock-700x300.jpg');
  }
}

ActController.$inject = ['$state', '$cookies', 'acl'];
