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

  //TODO: event listener for slot saving
  $('#slot1').on('click', function(){
     //Toggle data-saved attribute
     $('#slot1').attr('data-saved') === 'true' ? $('#slot1').attr('data-saved', false) : $('#slot1').attr('data-saved', true); 
  });


  // append our app.words.slotArray to the DOM
  genView.appendWords = function () {
    app.words.slotArray.forEach( function ( arrayEle, currentIndex, array) {
      let idName = '#slot' + (currentIndex+1);

      if ( $(idName).attr('data-saved') !== 'true' ) { $(idName).text(arrayEle); }

      //Update currentHandle with current displayed handle
      app.words.currentHandle = '';
      for (let i = 0; i < $('.slots').children().length; i++){
        app.words.currentHandle += $('.slots').children().eq(i).text();
        //TODO: refactor to accomodate concationation options
      }

    });
  }

  // populates our slots.
  genView.populateSlots = function() {
    app.words.randomizeAll()
    genView.appendWords()
  }
  
module.genView = genView

})(app);