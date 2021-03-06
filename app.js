const express = require('express');
//const mocha = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const MongoDB =require('./controllers/database');
const bodyParser = require('body-parser');
// Server keys generation


//////////////////////// Middlewares ///////////////////////////////

// Configurations
app.use(cors());

// ExpressJS will parse the request before it got routed
//app.use(mocha('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(bodyParser.json());
//app.use(express.json());

//Routes
app.use('/users', require('./routes/users'));
app.use('/subjects', require('./routes/subjects'));
app.use('/subjectVotes', require('./routes/subjectVotes'));
// Mongoose
MongoDB.connect();


module.exports = app;