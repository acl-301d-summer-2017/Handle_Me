'use strict';

var app = app || {};

(function (module){
  const genControl = {};

    
  genControl.init = function () { 
    app.words.requestWords(app.genView.init) 
  }

  module.genControl = genControl;

})(app);