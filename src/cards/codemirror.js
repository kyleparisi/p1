var base = require('./base')();

module.exports = function (el, data) {
  if (window.myCodeMirror === undefined) {
    window.myCodeMirror = CodeMirror(base.cardContent, {
      value: data,
      mode:  "javascript"
    });
    base.card.appendChild(base.cardContent);
    el.appendChild(base.card);
    window.myCodeMirror.refresh();
  } else {
    window.myCodeMirror.getDoc().setValue(data)
  }
}
