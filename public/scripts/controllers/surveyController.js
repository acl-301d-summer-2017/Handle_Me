'use strict';

var app = app || {};

(function (module){
  const surveyControl = {};

    
  surveyControl.init = function () { 
    app.surveyView.init()
  }

  module.surveyControl = surveyControl;

})(app);