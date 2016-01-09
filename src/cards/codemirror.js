var card = require('hyperscript')('.card');

module.exports = function (el, data) {
  if (window.myCodeMirror === undefined) {
    window.myCodeMirror = CodeMirror(card, {
      value: data,
      mode:  "javascript"
    });
    el.appendChild(card);
    window.myCodeMirror.refresh();
  } else {
    window.myCodeMirror.getDoc().setValue(data)
  }
}
