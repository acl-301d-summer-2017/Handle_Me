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
      let idName = '#slot' + (currentIndex+1);
      let concatType = 'camelcase';

      //If data-saved isn't true, append to DOM
      if ( $(idName).attr('data-saved') !== 'true' ) { 
        debugger
        switch (concatType) {
          case 'camelcase':
            if (currentIndex > 0) {
              let newElement = arrayEle.split('');
              newElement[0] = newElement[0].toUpperCase();
              $(idName).text(newElement.join(''));
            } else {
              $(idName).text(arrayEle); 
            }
        }
        
        // $(idName).text(arrayEle); 
      }

      //Update currentHandle with current displayed handle
      // app.words.currentHandle = '';
      // for (let i = 0; i < $('.slots').children().length; i++){
      //   if (app.words.currentHandle === ''){
      //     app.words.currentHandle += $('.slots').children().eq(i).text();
      //   } else {
      //     app.words.currentHandle += '-' + $('.slots').children().eq(i).text();
      //   }

      // }

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