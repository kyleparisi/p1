var h = require('hyperscript');

module.exports = function (manager) {
  manager.blank = function(content) {
    var card = h('.card', content);
    console.log(card);
    var list = document.body.getElementsByClassName('list');
    list[0].insertBefore(card, list[0].firstChild);
  }
}
