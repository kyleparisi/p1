var h = require('hyperscript');

module.exports = function (manager) {
  manager.blank = function(content) {
    return h('.card', content);
  }
}
