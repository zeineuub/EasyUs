const express = require('express');
const path = require('path');
const mongoose=require('mongoose');
const app = express();
const flash=require('connect-flash');
const user= require('./routes/user');
const session=require('express-session');
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

//Middleware
app.use(express.json());
//Connect Flash
app.use(flash());

//Global Vars
//hedhom flash msg fil redirection

app.use((req,res,next)=>{
  res.locals.success_msg=req.flash('success_msg');
  res.locals.errors_msg=req.flash('errors_msg');
  res.locals.error=req.flash('error');

  next();
});
//Route Middleware
app.use('/user',user);

//Bodyparser
//hedha extacti mil req les données eli hajtek behom
app.use(express.urlencoded({extended:false}));



//Bodyparser
//hedha extacti mil req les données eli hajtek behom
app.use(express.urlencoded({extended:false}));


//el port
const PORT = process.env.Port ||4200;



// Start the app by listening on the default Heroku port
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));


