var fs = require('fs'),
    codemirror = require('./cards/codemirror');

function file(aFile) {
  window.commandHistory.push('file ' + aFile);
  window.commandHistoryIndex = window.commandHistory.length;
  return new Promise(function(resolve, reject) {
    fs.readFile(aFile, 'utf8', function(err, data) {
        if (err) return reject(err);
        resolve(data);
    });

   });
}

module.exports = function (robot) {

  robot.hear(/file (.*)/, function(robot) {
    // only accpets 1 file for right now
    var filePath = robot.message[1];
    var promise = file(filePath);

    // visuals - need to refactor this
    var conversation = document.body.getElementsByClassName('conversation')[0];
    var notification = document.body.getElementsByClassName('notification')[0];
    promise.then(function(data) {
      notification.innerHTML = '';
      codemirror(conversation, data);

    }).catch(function(err) {
      if (err.code === 'ENOENT') {
        notification.innerHTML = 'No file found.  Please enter full file path.';
      };
      console.log(err.code);
    });
  });

}
