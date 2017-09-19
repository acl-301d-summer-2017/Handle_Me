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

  //Takes object of all possible words for all three slots. Returns a randomly selected word for each slot
  words.randomizeAll = function (){

    app.words.genArray.forEach(function(array){
      let possibleWords = JSON.parse(app.words.genArray[array].body);

    });



  }

  module.words = words

})(app);