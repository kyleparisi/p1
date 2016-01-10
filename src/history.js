var base_model = {
  pointer: 1,
  commandList: ['']
};

var model = base_model;

var controller = {
  read: function () {
    return model.commandList;
  },
  add: function (command) {
    model.commandList.push(command);
    model.pointer = model.commandList.length;
  },
  down: function () {
    if (model.pointer < model.commandList.length) {
      model.pointer++;
    }
    if (model.commandList[model.pointer] !== undefined) {
      return model.commandList[model.pointer];
    }

    return '';
  },
  up: function () {
    if (model.pointer > 0) {
      model.pointer--;
    }
    return model.commandList[model.pointer];
  },
  clear: function () {
    model = base_model;
  },
  current: function () {
    return model.commandList[model.pointer];
  }
}

module.exports = controller;
