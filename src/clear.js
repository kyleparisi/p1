var KEY = require('./constants');

module.exports = function (user) {

  user.pressed(/clear/, KEY.ENTER, function(robot) {
    robot.commandHistory.add('clear');
    window.myCodeMirror = undefined;
    document.getElementById('userInput').value = '';
    document.body.getElementsByClassName('list')[0].innerHTML = '';
    robot.notification.innerHTML = '';
    console.clear();
  });

}
