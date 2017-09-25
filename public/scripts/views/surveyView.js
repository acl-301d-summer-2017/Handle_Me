
'use strict';

var app = app || {};

(function (module){

  const surveyView= {};

  surveyView.init = function(){
    $('.survey').show().siblings().hide()

  }

module.surveyView = surveyView

})(app);


