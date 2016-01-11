var blank = require('./cards/blank');

module.exports = function (type, content) {

  // card registration - dynamic requires on construction
  blank(this);

  // exec
  this[type](content);

}
