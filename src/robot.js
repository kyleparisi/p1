var file = require('./file');

var robot = function(input) {

  file({
    hear: function(exp, cb) {
      this.message = exp.exec(input);
      if (this.message !== null) {
        cb(this);
      }
    }});

}

module.exports = robot;
