// TODO WEBPACK THEME CSS
// TODO DYNAMIC REQUIRE LANAGUAGES

var options = {
  mode: 'javascript',
  card: 'blank'
}

module.exports = function (robot, data) {

  CodeMirror(function (el) {
    robot.card(options.card, el);
  }, {
    value: data,
    mode:  options.mode
  });

}
