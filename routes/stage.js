
const express=require('express');
const router =express.Router();
const verify=require('./verifyToken');
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
router.get('/listage',(req,res)=>{
  Listage.find((err,list)=>{
    res.json(list);
  })
})


//adding stage
router.post('/addstage',upload.single('image'),(req,res)=>{
  console.log(req.file);

  let stage=new Listage({
    namesociete:req.body.namesociete,
    emailsociete:req.body.emailsociete,
    nomstage:req.body.nomstage,
    discription:req.body.discription,
    image:req.file.path
  })
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
