'use strict';

var app = app || {};

(function (module){
  const control = {};

    
  control.init = function () { 
    app.words.requestWords(app.view.init) 
  }

  module.control = control;

})(app);