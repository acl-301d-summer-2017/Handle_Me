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

  words.requestWords = function (callback){
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