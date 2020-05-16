const express=require('express');
const router =express.Router();
const jwt=require('jsonwebtoken');
const mongoose= require('mongoose');
const User=require('../models/User');
const UserCompany=require('../models/company')
const user=mongoose.model('User');
const bcrypt=require('bcryptjs');





  //Registration User  Handle
  router.post('/register',(req,res)=>{
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
            let userData= req.body;
            let user=new User (userData);

            bcrypt.genSalt(10,(err,salt)=>
                bcrypt.hash(userData.password,salt,(err,hash )=>{
                    if(err) throw err;
                    //set password to hash
                    userData.password=hash;
                    user.save((error,registeredUser)=>{
                      if(error){
                        console.log(error)
                      }else{
                        console.log(userData)
                        let payload={subject:registeredUser._id}
                        let token=jwt.sign(payload,'secretkey')
                        res.status(400).send({token})
                      }
                    })
                })
           )}
      })
    });

  //login  User handle
  router.post('/login',(req,res)=>{
    //extracting userdata
    let userData=req.body
    //checking existing email
      User.findOne({email:req.body.email},(error,user)=>{
        if(error){
          console.log(error)
        }
        else{
          //if we don't find the email
          if(!user){
            res.status(401).send('Email not found')
          }else{
            //if we found the email we check the password validation
            if(user.password !== userData.password){

              res.status(401).send('Invalid password')
            }else{
              let payload={subject:user._id}
              let token=jwt.sign(payload,'secretkey')
              res.status(200).send({token})
              console.log(userData)
            }
          }
        }
      })
  });


//registration and login for company


  //Registration User  Handle
  router.post('/registerCom',(req,res)=>{
    UserCompany.findOne({emailcompany:req.body.emailcompany})
      .then(userCom=>
        {
          //ken kineh fil DB
          if(userCom)
          {
            console.log('here')
            return res.status(400).send('Email Company already exists') ;
          }
          else
          {
            let userComData= req.body;
            let user=new UserCompany (userComData);

            bcrypt.genSalt(10,(err,salt)=>
                bcrypt.hash(userComData.passwordcompany,salt,(err,hash )=>{
                    if(err) throw err;
                    //set password to hash
                    userComData.passwordcompany=hash;
                    user.save((error,registeredComUser)=>{
                      if(error){
                        console.log(error)
                      }else{
                        console.log(userComData)
                        let payload={subject:registeredComUser._id}
                        let token=jwt.sign(payload,'secretkey')
                        res.status(400).send({token})
                      }
                    })
                })
           )}
      })
    });

  //login  User handle
  router.post('/loginCom',(req,res)=>{
    //extracting userdata
    let userComData=req.body
    //checking existing email
      UserCompany.findOne({emailcompany:req.body.emailcompany},(error,user)=>{
        if(error){
          console.log(error)
        }
        else{
          //if we don't find the email
          if(!user){
            res.status(401).send('Email company not found')
          }else{
            //if we found the email we check the password validation
            if(user.passwordcompany !== userComData.passwordcompany){

              res.status(401).send('Invalid password')
            }else{
              let payload={subject:user._id}
              let token=jwt.sign(payload,'secretkey')
              res.status(200).send({token})
              console.log(userComData)
            }
          }
        }
      })
  });






  module.exports= router;