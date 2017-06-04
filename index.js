const changeStatusId = require('./server').changeStatusId;
const inquirer = require('inquirer');


const orderStatus = {
  '-1': 'connectionError',
  1: 'cancelled',
  4: 'orderNotFound',
  0: 'init',
  6: 'order',
  7: 'prep',
  5: 'baking',
  8: 'quality',
  10: 'collection',
  2: 'collected',
  9: 'delivery',
  3: 'delivered',
};


let currentStatusId = 0;
function askUserForStatus () {
  // Pretty print the status options
  console.log(JSON.stringify(orderStatus, null, 2));

  const question = [
    {
      type: 'input',
      message: `[Current status: ${orderStatus[currentStatusId]}] Set a new status (by id) > `,
      name: 'newStatusId',
      validate: function (value) {
        return !!orderStatus[value];
      }
    }
  ];

  inquirer.prompt(question).then(function (answers) {
    currentStatusId = answers.newStatusId;
    changeStatusId(currentStatusId);

    askUserForStatus();
  });
}

askUserForStatus();
