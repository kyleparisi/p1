module.exports = function (el, data) {
  var card = document.createElement('div');
  card.className = "list";
  var cardContent = document.createElement('div');
  cardContent.className = "card";

  if (window.myCodeMirror === undefined) {
    window.myCodeMirror = CodeMirror(cardContent, {
      value: data,
      mode:  "javascript"
    });
    card.appendChild(cardContent);
    el.appendChild(card);
    window.myCodeMirror.refresh();
  } else {
    window.myCodeMirror.getDoc().setValue(data)
  }
}
