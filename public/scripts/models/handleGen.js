'use strict';

var app = app || {};

(function (module){

  const words = {};
  
  words.formResult = []
  var values = [];
  console.log(values);
  $('Form').submit(function() {
    event.preventDefault()
    $.each($('Form').serializeArray(), function(i, field) {
      values.push(field.value) 
      console.log("values",values)
  })
    
    values.forEach(function(each){
      console.log(each)
      if(each){
        words.answersArray.push(each)
      }
    });
    
   // app.words.requestWords(app.words.populateSlots)

});

  // this array will contain 3 arrays of data from API
  words.genArray = []

  //Three words appended to slots
  words.slotArray = [];


 words.answersArray = []
//  words.presetAnswer = ['sl=bird','rel_trg=tiny','rel_trg=pig']



  words.requestWords = function (){
    console.log("answersArray",words.answersArray)
    words.genArray = [];
    

    words.answersArray.forEach(function(value){
      $.get('/datamuse/api/' + value)
        .then ( function(data) {
        //Clear existing genArray before repopulating
        console.log("data:",data);
        words.genArray.push(data);
        console.log("genArray:",words.genArray);
        
        if (words.genArray.length === 3 ) {
           app.words.populateSlots(); 
          }
        })
     })
   }


  //Takes object of all possible words for all three slots. Returns an array containing a randomly selected word for each slot
  words.randomizeAll = function () {
    app.words.genArray.forEach(function(array){
      //Convert string to valid array
      let possibleWords = JSON.parse(array.body);
      let randomNumber = Math.floor(Math.random() * possibleWords.length);
      words.slotArray.push(possibleWords[randomNumber].word);
    });
    console.log('your words are', words.slotArray);
  }

  // append our words.slotArray to the DOM
  words.appendWords = function () {
    words.slotArray.forEach( function ( arrayEle, currentIndex, array) {
      let idName = "slot" + (currentIndex+1);
      $( '#' + idName).text(arrayEle);
    });
  }


  words.populateSlots = function() {
    words.randomizeAll()
    words.appendWords()
  }

  module.words = words

})(app);



