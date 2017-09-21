'use strict';


const express = require('express');
const PORT = process.env.PORT || 4000;
const app = express();
const request = require('request');
const bodyParser = require('body-parser');

app.use(express.static('./public'));

app.get("/datamuse/api/*", getDatamuse);

app.get("/twit/*", getTwit);

app.get("/inst/*", getInst);

app.get("/git/*", getGit);

//calls requestProxy used in app.get
 function getDatamuse (req, res){
    console.log( 'Routing request for', req.params[0] );
    request.get({url:`https://api.datamuse.com/words?${req.params[0]}`}, function(err,response){
      res.send(response)
    })
}

function getTwit (req, res){
  console.log( 'Routing Twit request for', req.params[0] );
  request.get({url:`https://twitter.com/users/username_available?username=${req.params[0]}`}, function(err,response){
    console.log(response.headers.status)
    res.send(response)
  })
}

function getInst (req, res){
  console.log( 'Routing Inst request for', req.params[0] );
  request.get({url:`https://www.instagram.com/${req.params[0]}`}, function(err,response){
    console.log(response.statusCode)
    res.send(response)
  })
}

function getGit (req, res){
  console.log( 'Routing Git request for', req.params[0] );
  request.get({
    url:`https://api.github.com/users/${req.params[0]}`,
    headers:{
  'User-Agent' : 'Martsyalis'
    } 
  }
, function(err,response){
    console.log(response)
    res.send(response)
  })
}


app.get('/login/', function(request, response) {
  client.query(
    `Select * FROM users WHERE user_name = $1`,
    [user_name]
  )
  .then function(resolts) {


  }
  

})


loadDBTables()

https://api.github.com/users/morganlacouture

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));





///           DATABASE          ////

function loadDBTables (){

  client.query(`
    CREATE TABLE IF NOT EXISTS
      users
        user_id SERIAL PRIMARY KEY
        user_name VARCHAR(50) NOT NULL
  `)

  client.query(`
    CREATE TABLE IF NOT EXISTS
      handles
        handle_id SERIAL PRIMARY KEY
        handle_name VARCHAR(200) NOT NULL
        users_id INTEGER NOT NULL REFERENCES users(user_id)
  `)








} 