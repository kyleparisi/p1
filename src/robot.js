var file = require('./file'),
    clear = require('./clear'),
    rateLimit = require('./rateLimit'),
    commandHistory = require('./history'),
    arrows = require('./arrows'),
    cardManager = require('./CardManager');

var robot = function(input, keyCode) {

  file({
    notification: document.body.getElementsByClassName('notification')[0],
    list: document.body.getElementsByClassName('list')[0],
    card: cardManager,
    hear: function(exp, key, cb) {
      this.message = exp.exec(input.value);
      if (this.message !== null && keyCode === key) {
        cb(this);
      }
    },
    commandHistory: commandHistory
  });

  clear({
    input: input,
    notification: document.body.getElementsByClassName('notification')[0],
    list: document.body.getElementsByClassName('list')[0],
    pressed: function(exp, key, cb) {
      this.message = exp.exec(input.value);
      if (this.message !== null && keyCode === key) {
        cb(this);
      }
    },
    commandHistory: commandHistory
  });

  arrows({
    input: input,
    pressed: function(exp, key, cb) {
      this.message = exp.exec(input.value);
      if (this.message !== null && keyCode === key) {
        cb(this);
      }
    },
    commandHistory: commandHistory
  })

}

module.exports = rateLimit(robot, 100);
