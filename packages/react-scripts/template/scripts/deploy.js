/* eslint-disable */

'use strict';

var client = require('firebase-tools');

console.log('Start deploying, wait please');

client
  .deploy({
    project: process.env.TRAINING_PROJECT_NAME || 'codelink-react-training',
    token: process.env.FIREBASE_TOKEN,
    cwd: '../build',
  })
  .then(function() {
    console.log('Your project has been deployed!');
    process.exit();
  })
  .catch(function(err) {
    console.log('Opps!!! Error: ', err);
  });
