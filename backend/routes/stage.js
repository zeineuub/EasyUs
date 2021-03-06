
const express=require('express');
const router =express.Router();
const jwt=require('jsonwebtoken');
const verify = require('./verifyToken');
const Listage=require('../models/Listage');
//handle data not parsed
const multer=require('multer');
const UserCompany=require('../models/company');
const Category=require('../models/category')


//Multer will store all the incoming files in this directory

//modify the file name

const storage= multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,'uploads');
  },
  filename: function(req,file,cb){
    cb(null,new Date().toISOString + file.originalname);
  }
});


const upload = multer({
  storage: storage,

});

//retrive list stage
//we verufy first the token ken shih ou kol yaatini el list
router.get('/listage',verify,(req,res)=>{
  Listage.find()
    .select("userId nomstage description categoryId")
    .populate('userId')
    .populate('categoryId','namecat')
    .exec()
    .then(stages=>{
      res.status(200).json({
        count:stages.length,
        listage:stages.map(stage=>{
          return{
            userId:stage.userId,
            nomsatge:stage.nomstage,
            description:stage.description,
            categoryId:stage.categoryId,

          };
        })

      });
    })
    .catch(err=>{
      res.status(500).json({
        error:err
      })
    })

})
router.post('/addstage',verify, async (req, res,next) => {

  const category= await Category.findOne({
    _id:req.body.categoryId

  })
  console.log(category)
   const user  = await UserCompany.findOne({
      _id:req.body.userId
   });
   console.log(user)

   if(!user) res.status(500).send('we cant find the user')

   const savestage= await new Listage ({
    description:req.body.description,
    nomstage:req.body.nomstage,
    categoryId:category._id,
    userId: user._id,
   });
   savestage
   .save()

   .then(result=>{
     console.log(result);
     res.status(201).json({
       message:'Intership stored',

     });
   })
   .catch(err=>{
     console.log(err);
     res.status(500).json({
       error:err
     });
   });

});

//adding stage
/*router.post('/addstage',(req,res)=>{
  try{
    console.log('user id '+ req.body.userId)
    const user=  UserCompany.findOne({
    _id:req.body.userId
    });

    if (!user)
    return res
    .status(409)
    .json({message:'user not exists'});

    console.log(user)
    let stage= new Listage({
      user:user._id,
      nomstage:req.body.nomstage,
      description:req.body.description,
      category:req.body.category,

    });

    let addstage=stage.save()
    res.status(400).send(err)
  }catch(err){
    res.status(500).json({ message:err })
  }

});*/
router.get('/somestage',(req,res)=>{
  let filledArray=new Array(3);
 Listage.find({nomstage: "PFE"}, function(err, data){
    if(err){
        console.log(err);
        return
    }

    if(data.length == 0) {
        console.log("No record found")
        return
    }
    let j=0;
    for(let i=0; i<filledArray.length;i++){
      filledArray[i] = data[j]
      j++;
    }
    rres.json(filledArray);
    console.log(filledArray);
})
});

module.exports= router










