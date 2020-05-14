const express = require('express');
const path = require('path');
const mongoose=require('mongoose');
const app = express();
const cors = require('cors');
const user= require('./routes/auth');
const Stage =require('./routes/stage');
const session = require('express-session');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


//cors middlware
app.use(cors());

// set up BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Route Middleware
app.use('/user',user);
app.use('/user',Stage);


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




//Port
const PORT = process.env.Port ||3000;



// Start the app by listening on the default Heroku port
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));


