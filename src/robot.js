var file = require('./file'),
    clear = require('./clear'),
    h = require('hyperscript');

var robot = function(input, keyCode) {

  file({
    card: function(card) {
      var card = h('.card', card);
      var list = document.body.getElementsByClassName('list');
      console.log(list.length);
      list[list.length - 1].appendChild(card);
    },
    hear: function(exp, cb) {
      this.message = exp.exec(input);
      if (this.message !== null) {
        cb(this);
      }
    }
  });

  clear({
    pressed: function(exp, key, cb) {
      this.message = exp.exec(input);
      if (this.message !== null && keyCode === key) {
        cb(this);
      }
    }
  });

}

module.exports = robot;
