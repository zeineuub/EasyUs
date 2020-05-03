const express=require('express');
const router =express.Router();
const mongoose= require('mongoose');
const User=require('../models/User');
const user=mongoose.model('User');
const bcrypt=require('bcryptjs');

//Registration Handle

router.post('/register',async(req,res)=>{
  res.send('Register');
    console.log(req)
    //body parser bish ihot kol champ fi variable
    const{name,email,password,password2}=req.body
    //tab intaa errors
    const errors=[];
    //check validation fields
    //champs ferghin
    if(!name||!email||!password||!password2)
    {
      errors.push({msg:'Please fill all the fields ^^'});

    }
    //checking matching password
    if(password !==password2)

    {
      errors.push({msg:'Password do not match retry ....'});
    }

    //checking length password
    if(password.length<8)
    {
      errors.push({msg:'Your password should be at least 8 characters'});
    }
    if (errors.length>0)
    {
      res.render('register',{
        errors,
        name,
        email,
        password,
        password2
      });
    }
    else{
      //validation passed
      //checking existing user
      User.findOne({email:email})
      .then(user=>{
        //if we find it in the database
        if(user)
        {
          errors.push({msg:'email is already registered '})

          //user exists
          res.render('register',{
            errors,
            name,
            email,
            password,
            password2
        });

        }
        else
        {
          //if we don't find it
          //we create a new user
          const newUser=new User
          ({
            name,
            email,
            password
          });
          //hash password khater fil console yodhor
          bcrypt.genSalt(10,(err,salt)=>
          bcrypt.hash(newUser.password,salt,(err,hash )=>{
            if(err) throw err;
            //set password to hash
            newUser.password=hash;

            //save user
            newUser.save()
            .then(user =>{
                //flash msg of sucess registration
                req.flash('success_msg','You are now registered and can sign up');
                //ou nhilou login page
                res.redirect('/user/login');
            })

            .catch(err=>console.log(err));
          }))

        }

      });
    }
  });


  //login handle
  module.exports= router;
