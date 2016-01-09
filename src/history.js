// HISTORY
module.exports = function() {
  window.commandHistory = [''];
  window.commandHistoryIndex = 0;
  document.addEventListener('keydown', function(event) {
    const UP = 38;
    const LEFT = 37;
    const RIGHT = 39;
    const DOWN = 40;
    var userInput = document.getElementById('userInput');

      if(event.keyCode == LEFT) {
        console.log('Left was pressed');
      }

      if(event.keyCode == RIGHT) {
        console.log('Right was pressed');
      }
      // console.log(window.commandHistoryIndex);
      if (event.keyCode == UP) {
        if (window.commandHistoryIndex > 0) {
          window.commandHistoryIndex--;
        }
        userInput.value = window.commandHistory[window.commandHistoryIndex];
      }

      if (event.keyCode == DOWN) {
        if (window.commandHistoryIndex < window.commandHistory.length) {
          window.commandHistoryIndex++;
        }

        if (window.commandHistory[window.commandHistoryIndex] !== undefined) {
          userInput.value = window.commandHistory[window.commandHistoryIndex];
        } else {
          userInput.value = '';
        }

      }
  });
}
