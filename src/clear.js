var KEY = require('./constants');

module.exports = function (user) {

  user.pressed(/clear/, KEY.ENTER, function(robot) {
    window.commandHistory.push('clear');
    window.commandHistoryIndex = window.commandHistory.length;
    window.myCodeMirror = undefined;
    document.getElementById('userInput').value = '';
    document.body.getElementsByClassName('list')[0].innerHTML = '';
    document.body.getElementsByClassName('notification')[0].innerHTML = '';
    console.clear();
  });

}
