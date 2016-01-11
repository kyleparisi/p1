var KEY = require('./constants');

module.exports = function (user) {

  user.pressed(/clear/, KEY.ENTER, function(robot) {
    robot.commandHistory.add('clear');
    robot.input.value = '';
    robot.list.innerHTML = '';
    robot.notification.innerHTML = '';
    console.clear();
  });

}
