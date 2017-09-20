'use strict';

var app = app || {};

(function (module){

  const genView= {};


  genView.init = function (){
  $('.survey').hide();
  $('.generator').show();
  genView.populateSlots();
  };

  //  This function will repopulate slots when user clicks re-roll button
  $("#re-roll").click(function(){
    app.genView.populateSlots()
  });


  // append our app.words.slotArray to the DOM
  genView.appendWords = function () {
    app.words.slotArray.forEach( function ( arrayEle, currentIndex, array) {
      let idName = "slot" + (currentIndex+1);
      $( '#' + idName).text(arrayEle);
    });
  }

  // populates our slots.
  genView.populateSlots = function() {
    app.words.randomizeAll()
    genView.appendWords()
  }
  
module.genView = genView

})(app);