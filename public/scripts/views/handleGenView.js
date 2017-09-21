'use strict';

var app = app || {};

(function (module){

  const genView= {};

  genView.appendSocial = function(){
    app.words.checkInst()
    app.words.checkGit()
    app.words.checkTwit()
    
   
  }


  genView.init = function (){
  $('.survey').hide();
  $('.generator').show();
  genView.populateSlots();
  };

  //  This function will repopulate slots when user clicks re-roll button
  $(".re-roll").click(function(){
    console.log("wokrs")
    app.genView.populateSlots()
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

      //Add event listener to toggle "data-saved" status
      $(idName).off('click');
      $(idName).on('click',function(){
        $(idName).attr('data-saved') === 'true' ? $(idName).attr('data-saved', false) : $(idName).attr('data-saved', true); 
        console.log(idName,'is clicked. data-saved value is',$(idName).attr('data-saved'))
        })

    });
  }

  // populates our slots.
  genView.populateSlots = function() {
    app.words.randomizeAll()
    genView.appendWords()
  }
  
module.genView = genView

})(app);