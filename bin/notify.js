#!/usr/bin/env node

var remindme = require('../index.js');

if (!process.argv[2]) {
  console.error('Please specify a message');
  process.exit(1);
}
var message = process.argv[2];

if (!process.argv[3]) {
  console.error('Please specify, in minutes, when to notify you');
}
var ms = (process.argv[3] * 60) * 1000;
console.log('Cool, I\'ll notify you to ' + message + ' in ' + process.argv[3] + ' minutes.');

remindme(message, ms);