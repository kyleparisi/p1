var KEYS = require('./constants');

module.exports = function(robot) {
  robot.pressed(/.*/, KEYS.UP, function(robot) {
    robot.input.value = robot.commandHistory.up();
  });
  robot.pressed(/.*/, KEYS.DOWN, function(robot) {
    robot.input.value = robot.commandHistory.down();
  });
};
