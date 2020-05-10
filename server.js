const express = require('express');
const path = require('path');
const mongoose=require('mongoose');
const app = express();
const cors = require('cors');
const user= require('./routes/user');
const session = require('express-session');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


// set up BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//Route Middleware
app.use('/user',user);

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.options('/user/*', function (request, response, next) {
  response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  response.send();
});

//DB configuration
const db=require('./config/keys').MangoUrl;


//Connect to Mango
//userNewPerser khater tajim tjina error
mongoose.connect(db,{useNewUrlParser:true})
.then(()=>{
    console.log("MongoDB Connected Great ");
})
.catch(err=>console.log(err));


//Express Session middleware

app.use(session({
  secret:'secret',
  resave:true,
  saveUninitialized:true,
}));


var originsWhitelist = [
  'http://localhost:4200',
    //this is my front-end url for development
   'https://easyus.web.app/home'
];
var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}
//here is the magic
app.use(cors(corsOptions));
const PORT = process.env.Port ||3000;



// Start the app by listening on the default Heroku port
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));


