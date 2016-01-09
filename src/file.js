var fs = require('fs'),
    codemirror = require('./cards/codemirror');

function file(command, aFile) {
  return new Promise(function(resolve, reject) {
    fs.readFile(aFile, 'utf8', function(err, data) {
        if (err) return reject(err);
        resolve({command: command, data: data});
    });

   });
}

module.exports = function (robot) {

  robot.hear(/file (.*)/, function(robot) {
    // only accpets 1 file for right now
    var filePath = robot.message[1];
    var promise = file(robot.message[0], filePath);

    // visuals - need to refactor this
    var cardList = document.body.getElementsByClassName('list')[0];
    var notification = document.body.getElementsByClassName('notification')[0];

    promise.then(function(data) {
      window.commandHistory.push(data.command);
      window.commandHistoryIndex = window.commandHistory.length;
      notification.innerHTML = '';

      codemirror(robot, data.data);

    }).catch(function(err) {
      if (err.code === 'ENOENT') {
        notification.innerHTML = 'No file found.  Please enter full file path.';
      };
      console.log(err.code);
    });
  });

}
