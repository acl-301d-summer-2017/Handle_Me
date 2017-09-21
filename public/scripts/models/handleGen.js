'use strict';

var app = app || {};

(function (module) {

  //Gets results from the form
  const words = {};

  //Stores results from form
  words.formResult = []

  //Stores current handle as a concatinated string
  words.currentHandle = '';

  //Option for concatination of final handle (app.words.currentHandle)
  words.concatOption = 'none';

  let values = [];
  $('Form').submit(function () {
    event.preventDefault()
    //For each form entry, push its value into values array
    $.each($('Form').serializeArray(), function (i, field) {
      values.push(field.value)
    })

    //Eliminate empty string entries
    values.forEach(function (each) {
      if (each) {
        words.answersArray.push(each)
      }
    });

    //Initiates the routes
    page('/gen');
  });


  //Event listener for sortable slots. Updates currentHandle variable after dragging.
  $('#sort').sortable({
    'update' : function(e, ui){
      app.genView.updateCurrentHandle();
    }
  });


  // this array will contain 3 arrays of data from API
  words.genArray = []

  // Array of values from the survey submited by the user 
  words.answersArray = []

  //Gets large word objects from datamuse api
  words.requestWords = function (callback) {
    words.genArray = [];
    words.answersArray.forEach(function (value) {
      $.get('/datamuse/api/' + value)
        .then(function (data) {
          words.genArray.push(data);
          //Possible TODO: make this scalable to number of slots
          if (words.genArray.length === 3) {
            callback();
          }
        })
    })
  }


  //Array of three words appended to slots
  words.slotArray = [];

  //Takes object of all possible words for all three slots. Returns an array containing a randomly selected word for each slot
  words.randomizeAll = function () {
    //resets words.slotArray to empty string so it can be repopulated when re-rolling the Generator
    words.slotArray.length = 0;
    app.words.genArray.forEach(function (array) {
      //Convert string to valid array
      let possibleWords = JSON.parse(array.body);
      let randomNumber = Math.floor(Math.random() * possibleWords.length);
      words.slotArray.push(possibleWords[randomNumber].word);
    });
  }

  
  // API 2

  words.availability = '';


  words.checkTwit = function(){
    $.get('/twit/' + words.currentHandle)
          .then ( function(data) {
            console.log(data)
          words.twitStatus = JSON.parse(data.body).reason;
          $('#checkTwit').text(words.twitStatus)
          console.log('words.availability:',words.currentHandle,words.availability)
       })
     }

  words.checkInst = function(){
    $.get('/inst/' + words.currentHandle)
      .then ( function(data) {
      data.statusCode === 404 ? words.instStatus =  "availible!" :  words.instStatus = "taken :(";
      $('#checkInst').text(words.instStatus);
      console.log('words.instStatus:',words.currentHandle,words.instStatus)
      
      })
  }
  

  words.checkGit = function(){
    $.get('/git/' + words.currentHandle)
      .then ( function(data) {
        JSON.parse(data.body).message == "Not Found" ? words.gitStatus =  "availible!" :  words.gitStatus = "taken :(";
        $('#checkGit').text(words.gitStatus)
      console.log('words.gitStatus:',words.currentHandle,words.instStatus)
      })
  }

  module.words = words

})(app);
