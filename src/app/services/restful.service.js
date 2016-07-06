import angular from 'angular';

class Restful {
  constructor ($http, $q) {
    this.http = $http;
    this.$q = $q;
    this.api = 'http://pilot-hi-1.4free.com.tw/api/';
    this.mockApi = 'http://localhost:5000/dashboard/api/v1/';
    var config = {
      apiKey: "AIzaSyCbvS9EsfPK53S6LJrlI0zy3ec0qV3SgMQ",
      authDomain: "watchout-backme.firebaseapp.com",
      databaseURL: "https://watchout-backme.firebaseio.com",
      storageBucket: "watchout-backme.appspot.com",
    };
    firebase.initializeApp(config);
  }

  getTest () {
    var userId = '12345';
    var name = 'Wesley';
    var email = 'woeifjwoeifjowi@gmail';
    firebase.database().ref('admin/').set({
      account: 'admin',
      password: '1234'
    }).then(function () {
      alert('Success');
    });
    // ref.child('first').set('Ada').then(function () {
    //   alert('Success');
    // });
    // ref.child('last').set('Lovelace');
    // alert('kkk');
    firebase.database().ref('admin/').on('value', function(snapshot) {
      alert(JSON.stringify(snapshot.val()));
    });
    // alert('jijoij');
  }

  getAdmin (account, pwd) {
    return this.$q(function (resolve, reject) {
      firebase.database().ref('admin/').on('value', function(snapshot) {
        resolve(snapshot.val().account === account && snapshot.val().password === pwd);
      });
    });
  }

  getSites () {
    return this.http({
      method: 'GET',
      url: this.api + 'sites/'
    });
  }

  getActs () {
    return this.http({
      method: 'GET',
      url: this.mockApi + 'activities/'
    });
  }

  getAttrs () {
    return this.http({
      method: 'GET',
      url: this.mockApi + 'attractions/'
    });
  }
}

export default angular.module('services.restful', ['firebase'])
  .service('restful', Restful)
  .name;
