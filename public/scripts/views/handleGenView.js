'use strict';

var app = app || {};

(function (module){

  const view= {};
  
  view.showGen = function(){
    $('.survey').hide();
    $('.generator').show();
}


module.view = view

})(app);