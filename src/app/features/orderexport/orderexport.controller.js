import moment from 'moment';

require('script!../../../assets/js/pdfmake');
require('../../../assets/js/vfs_fonts');

export default class OrderExportController {
  constructor ($state, $cookies, acl, $http, restful) {
    this.state = $state;
    this.cookies = $cookies;
    this.restful = restful;

    this.startOpened = false;
    this.endOpened = false;
    this.timeOption = {
      max: moment().subtract(1, 'days').format()
    };
    this.columnOrder = ['id', 'product', 'amount', 'extra', 'currency', 'cost',
    'status', 'notes', 'marks', 'tags', 'options', 'receiver_name',
    'receiver_email', 'receiver_phone', 'receiver_address', 'country',
    'city', 'area', 'postcode', 'wanttosay', 'sponsor_id', 'sponsor_name',
    'sponsor_email', 'pay_method', 'create_time', 'pay_time', 'refund_time',
    'actual_amount', 'ship_status', 'ship_id' , 'receipt_id', 'donated',
    'ship_notes'];

    this.columnHead = ['金流單號', '贊助細節', '總數量', '額外贊助', '幣別', '總金額',
    '狀態', '備註', '商家註記', '標籤', '選項', '收件者姓名', '收件者Email',
    '收件者電話', '收件者地址', '所在國家', '居住城市', '居住區域', '郵遞區號',
    '想說的話', '贊助者ID', '贊助者姓名', '贊助者Email', '付款方式', '訂單建立時間',
    '付款時間', '退款時間', '實際單位數量', '出貨狀態', '宅配 / 掛號單號', '發票號碼',
    '發票捐贈', '客服備註'];

    if (!acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('login');
    }
  }

  startOpen ($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.startOpened = !this.startOpened;
  };

  endOpen ($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this.endOpened = !this.endOpened;
  };

  exportUnshipped () {
    return this.restful.getUnshippedOrders()
    .then(response => {
      return response;
    });
  }

  exportAll () {
    return this.restful.getOrders()
    .then(response => {
      return response;
    });
  }

  exportCustom () {
    var query = {};
    if (!this.startTime || !this.endTime) {
      alert('請選擇時間區間');
    } else {
      query.startTime = this.startTime;
      query.endTime = this.endTime;
      return this.restful.queryOrders(query)
      .then(response => {
        return response;
      });
    }
  }

  exportErrorPDF () {
    return this.restful.getErrorLabels()
    .then(response => {
      var docDefinition = { defaultStyle: { font: 'wt002' } };
      var left = true;
      var column = [];
      docDefinition.content = [];
      response.forEach(label => {
        if (left) {
          column = {
            columns: [
              {
                text: label.receiver_name + ' 先生/小姐 收' + '\n' + label.receiver_phone + '\n' + label.receiver_address,
                width: '50%',
                margin: [50, 0, 0, 80]
              }
            ]
          };
        } else {
          column.columns.push({
            text: label.receiver_name + ' 先生/小姐 收' + '\n' + label.receiver_phone + '\n' + label.receiver_address,
            width: '50%',
            margin: [50, 0, 0, 80]
          });
          docDefinition.content.push(column);
          column = [];
        }
        left = !left;
      });
      if (!left) {
        docDefinition.content.push(column);
      }
      pdfMake.fonts = {
         wt002: {
           normal: 'wt002.ttf',
           bold: 'wt002.ttf',
           italics: 'wt002.ttf',
           bolditalics: 'wt002.ttf'
         }
      }

      pdfMake.createPdf(docDefinition).download();
    });
  }

  exportUnshippedPDF () {
    return this.restful.getUnshippedLabels()
    .then(response => {
      var docDefinition = { defaultStyle: { font: 'wt002' } };
      var left = true;
      var column = [];
      docDefinition.content = [];
      response.forEach(label => {
        if (left) {
          column = {
            columns: [
              {
                text: label.receiver_name + ' 先生/小姐 收' + '\n' + label.receiver_phone + '\n' + label.receiver_address,
                width: '50%',
                margin: [50, 0, 0, 80]
              }
            ]
          };
        } else {
          column.columns.push({
            text: label.receiver_name + ' 先生/小姐 收' + '\n' + label.receiver_phone + '\n' + label.receiver_address,
            width: '50%',
            margin: [50, 0, 0, 80]
          });
          docDefinition.content.push(column);
          column = [];
        }
        left = !left;
      });
      if (!left) {
        docDefinition.content.push(column);
      }
      pdfMake.fonts = {
         wt002: {
           normal: 'wt002.ttf',
           bold: 'wt002.ttf',
           italics: 'wt002.ttf',
           bolditalics: 'wt002.ttf'
         }
      }

      pdfMake.createPdf(docDefinition).download();
    });
  }
}

OrderExportController.$inject = ['$state', '$cookies', 'acl', '$http', 'restful'];
