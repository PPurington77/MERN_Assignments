const express = require('express');
const cors = require('cors');
const port = 8000;

const { jokeRouter } = require('./routes/joke.routes');

//this runs the file...it does not export anything
require('./config/mongoose.config');

const app = express();

//avoid cors errors since front end runs on a diff port
app.use(cors());

//req. body will be undefined w/o this
app.use(express.json());

//adds api/jokes to beg of routes
app.use('/api/jokes', jokeRouter);

