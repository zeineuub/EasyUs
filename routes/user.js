const express=require('express');
const router =express.Router();
const jwt=require('jsonwebtoken');
const mongoose= require('mongoose');
const User=require('../models/User');
const user=mongoose.model('User');
const bcrypt=require('bcryptjs');
const{registerValidation,loginValidation} =require('../validation');





//Registration Handle
router.post('/register',(req,res)=>{
  //validation
 const {error}=registerValidation(req.body);
 if (error) return res.status(400).send(error.details[0].message);


//cheking if the user is already in the database

User.findOne({email:req.body.email})
    .then(user=>
       {
      //ken kineh fil DB
      if(user)
      {
        return res.status(400).send('Email already exists') ;
      }
      else
      {
        //create new user
        const newUser = new User({
          name:req.body.name,
          email:req.body.email,
          password:req.body.password
        });

        bcrypt.genSalt(10,(err,salt)=>
            bcrypt.hash(newUser.password,salt,(err,hash )=>{
                if(err) throw err;
                //set password to hash
                newUser.password=hash;
        newUser.save()
        .then(user =>{
        console.log('it worked');
        res.send({newUser:newUser._id});
        })

        .catch(err=>console.log(err));

        }))
      }
   });
});


  //login handle
router.post('/login',(req,res)=>{
//lets validate the data before we use it
  const {error}=loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
 //checking if email exists
  User.findOne({email:req.body.email})
  .then(user=>
     {

    if(!user)
    {
      return res.status(400).send('Email is not found') ;

    }
    //password is correct
    const validPass=bcrypt.compare(req.body.password,user.password);
    if(!validPass) return res.status(400).send('Invalid password');


    //create and asign a token
    const token =jwt.sign({_id:user._id},process.env.Token_secret)
    res.header('auth-token',token).send(token);
    res.send('Logged in');
  });
});









  module.exports= router;
