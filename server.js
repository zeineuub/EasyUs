const express = require('express');
const path = require('path');
const mongoose=require('mongoose');
const app = express();
const cors = require('cors');
const category=require('./backend/routes/category')
const user= require('./backend/routes/auth');
const Stage =require('./backend/routes/stage');

const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Route Middleware
app.use('/auth',user);
app.use('/stage',Stage);
app.use('/category',category);


//cors middlware

app.use(cors());


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





//Port
const PORT = process.env.Port ||3000;



// Start the app by listening on the default Heroku port
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));


