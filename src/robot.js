var file = require('./file'),
    clear = require('./clear');

var robot = function(input, keyCode) {

  file({
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
