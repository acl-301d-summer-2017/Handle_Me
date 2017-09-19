'use strict';


const express = require('express');
const PORT = process.env.PORT || 4000;
const app = express();
const requestProxy = require('express-request-proxy');
const bodyParser = require('body-parser');
app.use(express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//calls requestProxy used in app.get
 function getDatamuse (request, response){
  console.log( 'Routing request for', request.params[0] );
  (requestProxy({
    url:`https://api.datamuse.com/words?${request.params[0]}`
  }))(request,response)
}


app.get("/datamuse/api/:param1", getDatamuse);
app.get('/api/', (request, response) => {
  console.log('not found');
  return (requestProxy({
    url:`https://api.datamuse.com/words?sl=bird`,
    headers: { Authorization: "Basic" }
  }))(request,response)
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
