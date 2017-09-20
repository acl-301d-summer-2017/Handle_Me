'use strict';

var app = app || {};

(function (module){
    const control = {};

    
    control.init = function () { 
      console.log("running init")
      $('.survey').hide();
      $('.generator').show();
      app.words.requestWords() 
     }

    module.control = control;

})(app);