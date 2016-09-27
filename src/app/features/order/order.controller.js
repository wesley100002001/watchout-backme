import moment from 'moment';

export default class OrderController {
  constructor ($state, $cookies, acl, $stateParams, restful) {
    if (!acl.checkStatus($cookies.get('status'))) {
      $state.go('login');
    }
    var orderId = $stateParams.orderId;

    this.restful = restful;
    this.restful.getOrder(orderId)
    .then(response => {
      this.info = response;
      this.info.ship_id = this.info.ship_id ? this.info.ship_id : '';
      this.info.receipt_id = this.info.receipt_id ? this.info.receipt_id : '';
      this.info.donated = this.info.donated ? this.info.donated : false;
      this.info.ship_notes = this.info.ship_notes ? this.info.ship_notes : '';
      this.info.create_time = this.info.create_time !== '無' ? moment(this.info.create_time).format('YYYY 年 MM 月 DD 日 HH:mm:ss') : '無';
      this.info.pay_time = this.info.pay_time !== '無' ? moment(this.info.pay_time).format('YYYY 年 MM 月 DD 日 HH:mm:ss') : '無';
      this.info.refund_time = this.info.refund_time !== '無' ? moment(this.info.refund_time).format('YYYY 年 MM 月 DD 日 HH:mm:ss') : '無';
    });
  }

  save () {
    if (this.info.ship_status === 'shipped') {
      this.info.ship_symbol = 'Ｏ';
    } else if (this.info.ship_status === 'notyet') {
      this.info.ship_symbol = 'Ｘ';
    } else if (this.info.ship_status === 'canceled' || this.info.ship_status === 'error') {
      this.info.ship_symbol = '△';
    } else if (this.info.ship_status === 'stateless') {
      this.info.ship_symbol = '--';
    }
    this.restful.updateOrder(this.info.id, {
      ship_status: this.info.ship_status,
      ship_symbol: this.info.ship_symbol,
      ship_id: this.info.ship_id,
      receipt_id: this.info.receipt_id,
      donated: this.info.donated,
      ship_notes: this.info.ship_notes
    }).then(function () {
      alert('儲存成功');
    });
  }
}

OrderController.$inject = ['$state', '$cookies', 'acl', '$stateParams', 'restful'];
