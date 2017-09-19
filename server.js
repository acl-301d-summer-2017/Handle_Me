'use strict';


const express = require('express');
const PORT = process.env.PORT || 4000;
const app = express();
const request = require('request');
const bodyParser = require('body-parser');

app.use(express.static('./public'));


//calls requestProxy used in app.get
 function getDatamuse (req, res){
    console.log( 'Routing request for', req.params[0] );
    request.get({url:`https://api.datamuse.com/words?${req.params[0]}`}, function(err,response){
      res.send(response)
    })
    
 
}
app.get("/datamuse/api/*", getDatamuse);


app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
