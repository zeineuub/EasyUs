const mongoose=require('mongoose');
const ListageSchema=new mongoose.Schema({
    //les attributs fil db
    userId:
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Usercompany',
      required:true

    },

    nomstage:{
      type:String,
      required:true,
      max:255,
      min:6
  },
    description:{
        type:String,
        required:true,
        max:1024,
        min:8
    },
    categoryId : {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Category',
      required:true,
    },
    image:{
      type:String,


    },
    date:{
        type:Date,
        default:Date.now
    }

});
const Listage=mongoose.model('Listage',ListageSchema);
module.exports=Listage;
