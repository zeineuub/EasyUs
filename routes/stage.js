
const express=require('express');
const router =express.Router();
const jwt=require('jsonwebtoken');
const verify = require('./verifyToken');
const Listage=require('../models/Listage');
//handle data not parsed
const multer=require('multer');


//Multer will store all the incoming files in this directory

//modify the file name

const storage= multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'uploads');
  },
  filename:function(req,file,cb){
    cb(null,new Date().toISOString + file.originalname);
  }
});


const upload = multer({
  storage: storage,

});

//retrive list stage
//we verufy first the token ken shih ou kol yaatini el list
router.get('/listage',verify,(req,res)=>{
  Listage.find((err,list)=>{

    res.json(list);

  })
})


//adding stage
router.post('/addstage',upload.single('image'),(req,res)=>{
  console.log(req.file);

  let stage=new Listage({
    namecompany:req.body.namecompany,
    emailcompany:req.body.emailcompany,
    nomstage:req.body.nomstage,
    description:req.body.description,
    category:req.body.category,
    image:req.file.path
  })

  populate("namecompany")
  populate("emailcompany")
  stage.save((error,list)=>{
    if(error){
      console.log(error)
    }else{
      console.log(stage);
      console.log('stage added succssfully');
      res.send(stage)

    }
  })
});
module.exports= router
