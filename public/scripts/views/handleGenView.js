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
    $('.generator').show().siblings().hide();
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

         if ( $(idName).attr('data-saved') !== 'true' ) { $(idName).text(arrayEle); }

      // //If data-saved isn't true, append to DOM
      // if ( $(idName).attr('data-saved') !== 'true' ) { 
      //   debugger
      //   switch (app.words.concatType) {
      //     case 'camelCase':
      //       if (currentIndex > 0) {
      //         let newElement = arrayEle.split('');
      //         newElement[0] = newElement[0].toUpperCase();
      //         $(idName).text(newElement.join(''));
      //         break;
      //       } 
      //     case 'hyphenated':
      //       if (currentIndex > 0) {
      //         $(idName).text('-' + arrayEle);
      //         break;
      //       } 
      //     case 'snakeCase':
      //       if (currentIndex > 0) {
      //         $(idName).text('_' + arrayEle);
      //         break;
      //       } 
      //     case 'none':
      //         $(idName).text(arrayEle);
      //   } 
      // }

      //Update currentHandle variable
      genView.updateCurrentHandle();

      //Add event listener to toggle "data-saved" status
      $(idName).off('click');
      $(idName).on('click',function(){
        $(idName).attr('data-saved') === 'true' ? $(idName).attr('data-saved', false) : $(idName).attr('data-saved', true); 
        console.log(idName,'is clicked. data-saved value is',$(idName).attr('data-saved'))
        })

    });
  }

  //Update currentHandle with current displayed handle
  genView.updateCurrentHandle = function () {
    app.words.currentHandle = '';

    //TODO: Add comments so this shit makes sense
    for (let i = 0; i < $('.slots').children().length; i++){
       switch (app.words.concatType) {
        case 'camelCase':
          if (i > 0) {
            let newElement = $('.slots').children().eq(i).text().split('');
            newElement[0] = newElement[0].toUpperCase();
            app.words.currentHandle += newElement.join('');
            break;
          } 
        case 'hyphenated':
          if (i > 0) {
            app.words.currentHandle += '-' + $('.slots').children().eq(i).text();
            break;
          } 
        case 'snakeCase':
          if (i > 0) {
            app.words.currentHandle += '_' + $('.slots').children().eq(i).text();
            break;
          } 
        case 'none':
        app.words.currentHandle += $('.slots').children().eq(i).text(); 
      } 
  }
    // TODO: Append currentHandle to DOM here
    console.log('currentHandle is now',app.words.currentHandle);
  }

  // populates our slots.
  genView.populateSlots = function() {
    app.words.randomizeAll()
    genView.appendWords()
  }
  
module.genView = genView

})(app);