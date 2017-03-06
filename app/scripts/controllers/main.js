'use strict';

angular.module('dt-lightbox-app')
  .controller('MainCtrl', function ($scope) {

    $scope.pay = function () {
      Datatrans.startPayment({'params': {
        'merchantId': 1000011011,
        'amount': 1000,
        'currency': 'CHF',
        'refno': new Date().getTime()%1000000,
        'sign':'30916165706580013',
        'paymentmethod': 'VIS',
        'aliasCC': '70119122433810042',
        'expm': 12,
        'expy': 18,
        'successUrl': 'https://localhost:9000/#/success',
        'errorUrl': 'https://localhost:9000/#/error',
        'cancelUrl': 'https://localhost:9000/#/cancel',
        //'uppWebResponseMethod': 'GET', // change from POST to GET for response params
        'uppStartTarget': '_top', // make sure "redirect only" payment methods are properly handled
        'uppReturnTarget': '_top'
      }, 'closed': function() {console.log('payment-page closed');},
         'opened': function() {console.log('payment-page opened');},
         'loaded': function() {console.log('payment-page loaded');},
         'error': function() {console.log('payment-page error');}});
    };

  });
