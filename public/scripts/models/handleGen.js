'use strict';

let app = app || {};

(function (module){

  const words = {};
  
  words.all = [];

  app.answer = {answer: actualAnswer, category: actualCategory}

  actualAnswer = formReply


// array of contatenated category and answer pairs from the user submited form


// this array will contain 3 arrays of data from API
words.genArray = []

  words.requestWords = function (callback){
    app.answersArray.forEach(function(value){
      $.get('/datamuse/api/' + value)
        .then ( function(data) {
        console.log(data)
        words.genArray.push(data)
        console.log(genArray);
        })
    })
      .then (callback);
  }


  module.words = words

})(app);