var h = require('hyperscript');

module.exports = function (manager) {
  manager.blank = function(content) {
    var card = h('.card', content);
    manager.list.insertBefore(card, manager.list.firstChild);
  }
}
