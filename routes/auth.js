const express=require('express');
const router =express.Router();
const jwt=require('jsonwebtoken');
const mongoose= require('mongoose');
const User=require('../models/User');
const UserCompany=require('../models/company')
const user=mongoose.model('User');
const bcrypt=require('bcrypt');
const nodemailer=require('nodemailer');
const passport=require('passport');



//Registration User  Handle
router.post('/register',  async (req,res) => {


  //checking if the user is already in the database
  const emailExist = await User.findOne({email: req.body.email});
  if(emailExist) return res.status(400).send('email already exists');

  //hash  passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  let userData =  new User({

      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,

  });
  let user = new User(userData)
  user.save((error, registeredUser)=>{
      if(error){
          console.log(error)
      } else {
          let payload = { subject: registeredUser._id}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
      }
  })
});

//login  User handle
router.post("/login", (req, res, next) => {
  let getUser;
  User.findOne({
      email: req.body.email
  }).then(user => {
      if (!user) {
          return res.status(401).json({
              message: "Authentication failed"
          });
      }
      getUser = user;
      return bcrypt.compare(req.body.password, user.password);
  }).then(response => {
      if (!response) {
          return res.status(401).json({
              message: "Authentication failed"
          });
      }
      let jwtToken = jwt.sign({
          email: getUser.email,
          userId: getUser._id
      }, "secretKey", {
          expiresIn: "1h"
      });
      res.status(200).json({
          token: jwtToken,
          expiresIn: 3600,
          _id: getUser._id
      });
  }).catch(err => {
      return res.status(401).json({
          message: "Authentication failed"
      });
  });
});


//registration and login for company


//Registration User  Handle
router.post('/registerCom',  async (req,res) => {


  //checking if the user is already in the database
  const emailExist = await UserCompany.findOne({emailcompany: req.body.emailcompany});
  if(emailExist) return res.status(400).send('email already exists');

  //hash  passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.passwordcompany, salt);

  let userData =  new UserCompany({

      namecompany: req.body.namecompany,
      emailcompany: req.body.emailcompany,
      passwordcompany: hashedPassword,

  });
  let user = new UserCompany(userData)
  user.save((error, registeredUser)=>{
      if(error){
          console.log(error)
      } else {
          let payload = { subject: registeredUser._id}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
      }
  })
});

//login  User handle
router.post("/loginCom", (req, res, next) => {
  let getUser;
  UserCompany.findOne({
      emailcompany: req.body.emailcompany
  }).then(user => {
      if (!user) {
          return res.status(401).json({
              message: "Authentication failed"
          });
      }
      getUser = user;
      return bcrypt.compare(req.body.passwordcompany, user.passwordcompany);
  }).then(response => {
      if (!response) {
          return res.status(401).json({
              message: "Authentication failed"
          });
      }
      let jwtToken = jwt.sign({
          emailcompany: getUser.emailcompany,
          userId: getUser._id
      }, "secretKey", {
          expiresIn: "1h"
      });
      res.status(200).json({
          token: jwtToken,
          expiresIn: 3600,
          _id: getUser._id
      });
  }).catch(err => {
      return res.status(401).json({
          message: "Authentication failed"
      });
  });
});

router.get('/currentUser',(req,res)=>{
    try{
      const user= UserCompany.findOne(
        {
          _id:req.body.id
        }
      );
      res.json(user);

    }catch (err){
      res.json({message:err});
      console.log(err);
    }
})


exports.user_current =   function(req, res) {
  console.log('current user here ')  ;
      return res.status(200).json(req.userData);
}


router.post('/forget',function(req,res,next){

  User.findOne({email:req.body.email},function(err,user){
    if(!user){
      res.status(500).send('Email wrong');
      return res.redirect('/changepass');
    }


    user.save((error)=>{
      if(error){
          console.log(error)
      } else {
         res.status(200).send('all good')

      }
  });
},
  function(user,done){
    var smtpTransort=nodemailer.createTransport({
      service: 'Gmail',
      auth:{
        user:'ghada.malek12@gmail.com',
        pass:''
      }
    });
    var mailOptions ={
      to:'ghadazeineb.malek@etudiant-isi.utm.tn',
      from:'ghada.malek12@gmail.com',
      subject:'Node.js Passport Reset',
      text:'You are receiving  this because you (or someone else) have requested the reset of the page '+
      'Please click on the following link or paste this into your browserto complete the process'+
      'http://'+req.headers.host+'/reset/'+'\n\n'+
      'If you did not request this, please ignore  this email and your password will remain unchanged'
    };
    smtpTransort.sendMail(mailOptions,function(err){
      console.log('mail sent');
      res.status('200').send(' an email has been sent to '+ user.email);
      done(err,'done');
    });
  },


 function(err){
   if(err) return next(err);
   res.redirect('/changepass');
 });


});
router.get('/reset',function(req,res){
  if(req.body.password===req.body.password2){
    user.setPassword(req.body.password2,function(err){
     user.save(function(err){
       req.logIn(user,function(err){
         done(err,user);
         return res.redirect('/home')
       });

     });

    })
  }else{
    res.status(200).send('password do not match ');
    return res.redirect('home')
   }


})



  module.exports= router;
