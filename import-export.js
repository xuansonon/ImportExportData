var outputs = [
  document.getElementById("data1"),
  document.getElementById("data2"),
  document.getElementById("data3"),
  document.getElementById("data4"),
  document.getElementById("data5")
];

var inputs = [
  document.getElementById("input1"),
  document.getElementById("input2"),
  document.getElementById("input3"),
  document.getElementById("input4"),
  document.getElementById("input5")
];

var outputArea = document.getElementById("export-area");
var inputArea = document.getElementById("import-area");


var sys = {
  "data": ["0","0","0","0","0"],

  init: function() {
    for(var i = 0; i < 5; i++) {
      outputs[i].innerHTML = this.data[i];
    }
  },

  saveData: function() {
    var exportString = "";
    for(var i = 0; i < 5; i++) {
      exportString += inputs[i].value + "||";
    }
    exportString = btoa(exportString);
    outputArea.value = exportString;
  },

  loadData: function() {
    var importString = inputArea.value;
    importString = atob(importString);
    console.log(importString);
    importString = importString.split("||");
    for(var i = 0; i < 5; i++) {
      outputs[i].innerHTML = importString[i];
    }
    this.reset();
  },

  reset: function() {
    for(var i = 0; i < 5; i++) {
      inputs[i].value = "";
    }
    outputArea.value = "";
  }
};

sys.init();
