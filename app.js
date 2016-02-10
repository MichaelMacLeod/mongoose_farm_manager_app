var express        = require('express');
var path           = require('path');
var bodyParser     = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var app            = express();
var Animal = require('./models/animal');
var Farm = require('./models/farm');
//Mongoose: 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27019/farm-manager');

//App settings: 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressLayouts);

//Serve js & css files from a public folder
app.use(express.static(__dirname + '/public'));

//Let's add all the farms.locals here**********
// ############ YOU CAN ADD YOUR ROUTES BELOW HERE




app.listen(3000, function(){
  console.log("Welcome to the Farm Manager");
});