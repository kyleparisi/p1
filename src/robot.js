var file = require('./file'),
    clear = require('./clear'),
    h = require('hyperscript'),
    rateLimit = require('./rateLimit'),
    commandHistory = require('./history'),
    arrows = require('./arrows');

var robot = function(input, keyCode) {

  file({
    card: function(card) {
      var card = h('.card', card);
      var list = document.body.getElementsByClassName('list');

      list[0].insertBefore(card, list[0].firstChild);

    },
    hear: function(exp, key, cb) {
      this.message = exp.exec(input.value);
      if (this.message !== null && keyCode === key) {
        cb(this);
      }
    },
    commandHistory: commandHistory
  });

  clear({
    pressed: function(exp, key, cb) {
      this.message = exp.exec(input.value);
      if (this.message !== null && keyCode === key) {
        cb(this);
      }
    },
    commandHistory: commandHistory
  });

  // history({
  //   hear: function(exp, cb) {
  //     this.message = exp.exec(input);
  //     if (this.message !== null) {
  //       cb(this);
  //     }
  //   }
  // });

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
