const mongoose=require('mongoose');
const ListageSchema=new mongoose.Schema({
    //les attributs fil db
    nomsociete:{
      type:String,

      min:6,
      max:255
  },
    emailsociete:{
        type:String,

        max:255,
        min:6
    },
    nomstage:{
      type:String,

      max:255,
      min:6
  },
    description:{
        type:String,

        max:1024,
        min:8
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
