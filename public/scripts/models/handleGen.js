'use strict';

let app = {};

(function (module){

  const words = {};
  
  words.all = [];
  
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

 words.answersArray = []
 words.presetAnswer = ['sl=bird','rel_trg=tiny','rel_trg=pig']

  words.requestWords = function (callback){
    console.log("answersArray",words.answersArray)
    console.log("presetAnswer",words.presetAnswer)
    words.answersArray.forEach(function(value){
      $.get('/datamuse/api/' + value)
        .then ( function(data) {
        console.log("data:",data)
        words.genArray.push(data)
        console.log("genArray:",words.genArray);
        })
    })
      //.then (callback);
  }

  $.get

  module.words = words

})(app);