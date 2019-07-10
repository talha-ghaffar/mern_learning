const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const config = require('./config');
//const path = require('path');
const items = require('./routes/api/items')

const app = express();

//1. BodyParser Middleware...
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//1. DB Config
const db = require('./config/keys').mongoURI;
//const db = config.get('mongoURI');

//1. Connect to mongodb
//mongoose
//  .connect(db,{ useNewUrlParser: true })
//  .then(() => console.log('MongoDB Connected...'))
//  .catch(err => console.log(err));

// Connect to Mongo
mongoose
  .connect(
    db,
    {useNewUrlParser: true}
  ) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));



//2. Use Routes
app.use('api/items', items);   //Anything that goes to api/items should refer to items variable declared on line 5

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));
