module.exports = function (robot, data) {

  CodeMirror(robot.card, {
    value: data,
    mode:  "javascript"
  });

}
