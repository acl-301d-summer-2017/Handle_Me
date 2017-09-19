'use strict';

let app = {};

(function (module){

  const words = {};
  
  words.formResult = []
  var values = [];
  console.log(values);
  $('Form').submit(function() {
    event.preventDefault()
    $.each($('Form').serializeArray(), function(i, field) {
      values.push(field.value);
  });
    
    values.forEach(function(each){
      console.log(each)
      if(each){
        words.answersArray.push(each)
      }
    });
    

});

  // this array will contain 3 arrays of data from API
  words.genArray = []

  //Three words appended to slots
  words.slotArray = [];


 words.answersArray = []
//  words.presetAnswer = ['sl=bird','rel_trg=tiny','rel_trg=pig']


  words.requestWords = function (callback){
    console.log("answersArray",words.answersArray)
    console.log("presetAnswer",words.presetAnswer)
    words.genArray = [];
    words.answersArray.forEach(function(value){
      $.get('/datamuse/api/' + value)
        .then ( function(data) {
        //Clear existing genArray before repopulating
        console.log("data:",data);
        words.genArray.push(data);
        console.log("genArray:",words.genArray);
        })
    })
      //.then (callback);
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

  module.words = words

})(app);