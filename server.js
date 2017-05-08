const express = require('express')
const app = express()

// Set a default order status
const STATUS_ID = 'statusId';
app.set(STATUS_ID, 1);

function changeStatusId (newStatusId) {
  app.set(STATUS_ID, newStatusId);
}

app.get(['/pizzaTracker/getOrderDetails', '/pizzaTracker/getOrderStatus'], function (req, res) {
  const defaultStatus = {
    'customerName': 'user',
    'storeName': 'store name',
    'orderPlacedTime': '2016-11-01T20:31:02.924',
    'orderPreferredTime': null,
    'fulfilmentMethod': 1,
    'statusId': null,  // <--
    'requiredAsap': true,
    'storeManagerName': '',
    'driverName': '',
    'feedbackProvided': false,
    'providedFeedBackByQuestionId': [],
    'trackingUrl': null
  }

  defaultStatus['statusId'] = app.get(STATUS_ID);

  res.send(defaultStatus);
});

app.get('/pizzaTracker/getTrackerConfig', function (req, res) {
  res.send('\n\n');
});

if (process.env.NODE_ENV != 'TEST') {
  app.listen(3000, function () {
    console.log('Listening on port 3000')
  });
}

module.exports = {
  app: app,
  changeStatusId: changeStatusId
}