'use strict';

var app = app || {};

(function (module){

  const view= {};
  
  $('#survey-submit').click(function(){
    $('.survey').hide();
    $('.generator').show();
})


module.view = view

})(app);