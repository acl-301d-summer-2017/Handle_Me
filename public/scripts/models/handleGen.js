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
        console.log("genArray:",genArray);
        })
    })
      //.then (callback);
  }

  $.get

  module.words = words

})(app);