'use strict';

//Temporary function, used for demo purposes
var check = function (handle){
  app.words.currentHandle = handle;
  app.genView.appendSocial();
}

$(document).keypress(function(e) {
  if(e.which == 13) {
    let name = prompt("Enter a Username");
    check(name);
  }
});

var app = app || {};

(function (module){
  const genControl = {};

  genControl.init = function () { 
    app.words.requestWords(app.genView.init) 
  }

  module.genControl = genControl;

})(app);