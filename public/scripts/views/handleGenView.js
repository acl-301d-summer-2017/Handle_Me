'use strict';

var app = app || {};

(function (module){

  const view= {};


  view.init = function (){
  $('.survey').hide();
  $('.generator').show();
  view.populateSlots();
  };

  //  This function will repopulate slots when user clicks re-roll button
  $("#re-roll").click(function(){
    app.view.populateSlots()
  });


  // append our app.words.slotArray to the DOM
  view.appendWords = function () {
    app.words.slotArray.forEach( function ( arrayEle, currentIndex, array) {
      let idName = "slot" + (currentIndex+1);
      $( '#' + idName).text(arrayEle);
    });
  }

  // populates our slots.
  view.populateSlots = function() {
    console.log ("populate slots in view")
    app.words.randomizeAll()
    view.appendWords()
  }
  
module.view = view

})(app);