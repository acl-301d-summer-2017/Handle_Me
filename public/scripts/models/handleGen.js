'use strict';

let app = {};

(function (module){

  const words = {};
  
  words.all = [];


// this array will contain 3 arrays of data from API
words.genArray = []

let answersArray = ['sl=bird','rel_trg=tiny','rel_trg=pig']

  words.requestWords = function (callback){
    answersArray.forEach(function(value){
      $.get('/datamuse/api/' + value)
        .then ( function(data) {
        console.log("data:",data)
        words.genArray.push(data)
        console.log("genArray:",words.genArray);
        })
    })
      //.then (callback);
  }

  //Takes object of all possible words for all three slots. Returns an array containing a randomly selected word for each slot
  words.randomizeAll = function () {
    let wordArray = [];
    app.words.genArray.forEach(function(array){
      //Convert string to valid array
      let possibleWords = JSON.parse(array.body);
      let randomNumber = Math.floor(Math.random() * possibleWords.length);
      wordArray.push(possibleWords[randomNumber]);
    });
    console.log('your words are',wordArray);
    return wordArray;
  }

  module.words = words

})(app);