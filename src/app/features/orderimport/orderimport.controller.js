import moment from 'moment';
import { orderMustHave } from '../../data/order';

export default class OrderImportController {
  constructor ($state, $cookies, acl, $http, restful, xlsxReader, $q) {
    var scope = this;
    this.restful = restful;
    this.$q = $q;
    scope.state = $state;
    scope.cookies = $cookies;
    scope.xlsxReader = xlsxReader;

    if (!acl.checkStatus(this.cookies.get('status'))) {
      this.state.go('login');
    }
    scope.sheets = [];  //工作表 array
  }

  fileChanged (files) {
    var showPreview = false;        //以表格預覽
    var showJSONPreview = true;     //以json預覽
    this.sheets = [];               //工作表 array
    this.excelFile = files[0];      //選擇之excel檔(.xlsx格式)
    this.xlsxReader.readFile(this.excelFile, showPreview, showJSONPreview)
    .then(xlsxData => {
      this.sheets = xlsxData.sheets;
      // 如果第一筆就是 Worksheet1，那就直接選它
      if (!!this.sheets['Worksheet1']) {
        this.selectedSheetName = 'Worksheet1';
      }
    });
  }

  uploadSheet () {
    var orderlist = [];
    var memberlist = [];
    var errorOrders = [];
    this.uploading = true;
    this.restful.getOrdersForImport()
    .then(orders => {
      this.existOrders = orders;
      return this.$q(function (resolve, reject) {
        resolve(true);
      });
    }).then(response => {
      this.sheets[this.selectedSheetName].forEach(order => {
        // 加入檢查機制，確認所有欄位才匯入
        var verified = orderMustHave.every(col => {
          return !!order[col];
        });
        if (!verified) {
          errorOrders.push(order);
          return;
        }
        var normalizedOrder = {
          id: order['金流單號'],
          product: !!order['贊助細節'] ? order['贊助細節'] : '無',
          amount: !!order['總數量'] ? order['總數量'] : '無',
          extra: !!order['額外贊助'] ? order['額外贊助'] : '無',
          currency: !!order['幣別'] ? order['幣別'] : '無',
          cost: !!order['總金額'] ? order['總金額'] : '無',
          status: !!order['狀態'] ? order['狀態'] : '無',
          notes: !!order['備註'] ? order['備註'] : '無',
          marks: !!order['商家註記'] ? order['商家註記'] : '無',
          tags: !!order['標籤'] ? order['標籤'] : '無',
          options: !!order['選項'] ? order['選項'] : '無',
          receiver_name: !!order['收件者姓名'] ? order['收件者姓名'] : '無',
          receiver_email: !!order['收件者Email'] ? order['收件者Email'] : '無',
          receiver_phone: !!order['收件者電話'] ? order['收件者電話'] : '無',
          receiver_address: !!order['收件者地址'] ? order['收件者地址'] : '無',
          country: !!order['所在國家'] ? order['所在國家'] : '無',
          city: !!order['居住城市'] ? order['居住城市'] : '無',
          area: !!order['居住區域'] ? order['居住區域'] : '無',
          postcode: !!order['郵遞區號'] ? order['郵遞區號'] : '無',
          wanttosay: !!order['想說的話'] ? order['想說的話'] : '無',
          sponsor_id: !!order['贊助者ID'] ? order['贊助者ID'] : '無',
          sponsor_name: !!order['贊助者姓名'] ? order['贊助者姓名'] : '無',
          sponsor_email: !!order['贊助者Email'] ? order['贊助者Email'] : '無',
          pay_method: !!order['付款方式'] ? order['付款方式'] : '無',
          create_time: !!order['訂單建立時間'] ? order['訂單建立時間'] : '無',
          pay_time: !!order['付款時間'] ? order['付款時間'] : '無',
          // Since firebase do not support descending order
          inverse_pay_time: !!order['付款時間'] ? -1 * moment(order['付款時間']).format('X') : 0,
          refund_time: !!order['退款時間'] ? order['退款時間'] : '無',
          actual_amount: !!order['實際單位數量'] ? order['實際單位數量'] : '無',
          backme_fee: !!order['貝殼手續費'] ? order['貝殼手續費'] : '無',
          installment: !!order['幾期付款'] ? order['幾期付款'] : '無'
        };

        // 新的才處理 ship_status，原先錯的直接刪掉重來
        if (!this.existOrders || !(order['金流單號'] in this.existOrders)) {
          normalizedOrder.ship_status = 'notyet';
          normalizedOrder.ship_symbol = 'Ｘ';
          if (normalizedOrder.installment > 0 && normalizedOrder.status !== 'recurring') {
            normalizedOrder.ship_status = 'stateless';
            normalizedOrder.ship_symbol = '--';
          }
          // FIXME: should use angular translate
          switch (normalizedOrder.status) {
            case 'success':
              normalizedOrder.pay_symbol = 'Ｏ';
              break;
            case 'failed':
              normalizedOrder.pay_symbol = 'Ｘ';
              break;
            case 'wait':
              normalizedOrder.pay_symbol = '△';
              break;
            case 'recurring':
              normalizedOrder.pay_symbol = '定期定額授權單';
              break;
            default:
              alert('Error: undefined status');
          }
        }

        var normalizedMember = {
          receiver_name: normalizedOrder.receiver_name,
          receiver_email: normalizedOrder.receiver_email,
          receiver_phone: normalizedOrder.receiver_phone,
          receiver_address: normalizedOrder.receiver_address,
          country: normalizedOrder.country,
          city: normalizedOrder.city,
          postcode: normalizedOrder.postcode,
          id: normalizedOrder.sponsor_id,
          name: normalizedOrder.sponsor_name,
          email: normalizedOrder.sponsor_email
        };
        orderlist.push(this.restful.updateOrder(normalizedOrder.id, normalizedOrder));
        memberlist.push(this.restful.updateMember(normalizedMember.id, normalizedMember));
      });
      return this.$q(function (resolve, reject) {
        resolve(true);
      });
    }).then(response => {
      console.log(errorOrders);
      return this.$q.all(orderlist);
    }).then(response => {
      return this.$q.all(memberlist);
    }).then(response => {
      return this.restful.updateLastUpdateTime();
    }).then(response => {
      this.uploading = false;
      alert('同步完成');
    }).catch(err => {
      console.log(err);
    });
  }
}

OrderImportController.$inject = ['$state', '$cookies', 'acl', '$http',
  'restful', 'xlsxReader', '$q'];
