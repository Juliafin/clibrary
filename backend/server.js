const express = require('express');
require('dotenv').config({path: './backend/config_variables/.env'});

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get ('/test', (req, res) => {
  return res.json({message: "This works :\)"})
})

app.post ('/sendtest', (req, res) => {
  console.log(req.body);
  req.body.a +=1;
  req.body.b +=1;
  req.body.c +=1;

  return res.json (req.body);
})


const runServer = (port = process.env.SERVER_PORT) => {
  return new Promise ((resolve, reject) => {

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    })
    
  })
};

runServer()
.catch((err) => {
  console.log('Error with the server starting', err);
})
;