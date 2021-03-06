
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var sRouter = require('./routers/router');
var cors = require('cors') 
var app = express();
app.use(cors());
var PORT = 8081;
var HOST_NAME = 'localhost:27017';
var DATABASE_NAME = 'students';

mongoose.connect('mongodb://chiziaruhoma:Chiziaruhoma14@ds245772.mlab.com:45772/students');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));




app.use('/api', sRouter);

app.listen(process.env.PORT || 3000, function(){
  console.log('Magic happening on port ' + PORT);
});
