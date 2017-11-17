const express = require('express');
require('dotenv').config({path: './backend/config_variables/.env'});
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


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

let server;

const runServer = (port = process.env.SERVER_PORT, dbURL = process.env.MONGO_URL) => {
  return new Promise ((resolve, reject) => {

    server = app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    })

    mongoose.connect(dbURL, {useMongoClient:true})
    const dbConnection = mongoose.connection;
  
    dbConnection.on('error', (err) => {
      console.log('The Mongoose connection failed with this error: ', err);
      console.log('Closing server due to mongoose connection error');
      server.close();
    } )
    dbConnection.once('open', () => {
      console.log('Mongoose connection successful');
    })


    
  })
};


// const mongooseConnection = (dbURL = process.env.MONGO_URL) => {
  
// }



runServer()
.then(() => {
  console.log('testing')
})
.catch((err) => {
  console.log('Error with the server starting', err);
})
;