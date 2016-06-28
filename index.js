const notifier = require('node-notifier');

module.exports = function(message, ms) {
  setTimeout(function() {
    notifier.notify({
      'title': 'HEY!',
      'message': message,
      'sound': 'Hero',
      'icon': __dirname + '/assets/timer.png'
    });
  }, ms);
};