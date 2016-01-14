var blank = require('./cards/blank'),
    h = require("virtual-dom/h"),
    createElement = require('virtual-dom/create-element'),
    diff = require('virtual-dom/diff'),
    patch = require('virtual-dom/patch'),
    Immutable = require('immutable');

var rootNode = createElement(h('.list'));
var state = rootNode;

document.body.appendChild(rootNode);

var cards = Immutable.List.of([]);
var addCard = function(card) {
  var update = cards.set(-1, card);
  window.update = update;
  var list = h('.list', update.toArray());
  var patches = diff(rootNode, list);
  rootNode = patch(rootNode, patches);
}

module.exports = function (type, content) {

  // card registration - dynamic requires on construction
  blank(this);

  // exec
  var card = this[type](content);

}

addCard(h('.card'));
window.h = h;
window.addCard = addCard;
window.cards = cards;
