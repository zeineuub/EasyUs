const express=require('express');
const router=express.Router()
const Category=require('../models/category');





router.post('/addcat',(req,res)=>{
const cat =new Category({
  namecat:req.body.namecat
})
cat
.save()
.then(result=>{
  console.log(result);
  res.status(201).json({
    message:'Category added'
  })
})
.catch(err=>{
  console.log(err);
  res.status(500).json({
    error:err
  });
});

})
router.get('/listcat',(req,res)=>{
  Category.find()
  .then(categories=>{
    res.status(200).json({
      count:categories.length,
      listage:categories.map(category=>{
        return{
          namecat:category.namecat
        };
      })

    });
  })

})
module.exports= router
