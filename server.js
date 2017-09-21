'use strict';


const express = require('express');
const PORT = process.env.PORT || 4000;
const app = express();
const request = require('request');
const bodyParser = require('body-parser');
const pg = require('pg');



const client = new pg.Client('postgres://localhost:5432/handle_me');
client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


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

// checks if user already exists, creates one if not and returns id
app.get('/login/', function (request, response) {
  console.log ("im here",request.query.user_name)
  client.query(
    `Select * FROM users WHERE user_name = $1`,
    [request.query.user_name]
  )
    .then(result => {
      console.log("after select Query",result.rows)
      if (result.rows.length === 0) {
        console.log ("new")
        client.query(
          'INSERT INTO users(user_name) VALUES ($1)',
          [request.query.user_name],
        ) 
          .then (function () {
            client.query(
              'SELECT user_id FROM users WHERE user_name = $1',
              [request.query.user_name]
            ).then(function (res) {
              sendResults(res.rows[0].user_id)
            })
          })
          
          .catch(function(e){
            console.log (e)
          })
      } else {
        console.log (result.rows[0].user_id)
        sendResults(result.rows[0].user_id)
      }

      function sendResults (result){
        response.send({id:result})
    
      }
    })
    .catch(function(e){
      console.log (e)
    })
})

// app.post('/addFav', function (request, response) {
//   client.query(
//     `INSERT INTO handles( user_id, handle_name) VALUES ($1, $2) ON CONFLICT DO NOTHING`
//     [request.user_id, request.user_name]
//   )
//   .then(function (res) {
//     console.log (sendResults(request.user_id, request.user_name))
//     sendResults(request.user_id, request.user_name)
//   })
// })

loadDBTables()

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));





///           DATABASE          ////

function loadDBTables (){

  client.query(`
    CREATE TABLE IF NOT EXISTS
      users(
        user_id SERIAL PRIMARY KEY,
        user_name VARCHAR(50) NOT NULL);
  `)

  client.query(`
    CREATE TABLE IF NOT EXISTS
      handles (
        handle_id SERIAL PRIMARY KEY,
        handle_name VARCHAR(200) NOT NULL,
        users_id INTEGER NOT NULL REFERENCES users(user_id) );
  `)
} 