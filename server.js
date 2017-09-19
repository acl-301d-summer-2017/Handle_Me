'use strict';


const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('./public'));
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
const requestProxy = require('express-request-proxy');

//calls requestProxy used in app.get
 function getDatamuse (request, response) {
  console.log ("getDatamuse is running")
  (requestProxy ({
    url:`https://api.datamuse.com/words?${request.params[0]}`
  })) (request,response)
}

app.get("datamuse/api/*", getDatamuse )

