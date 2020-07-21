var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({

  namecat: {
    type:String,
    required:true
  }
});

module.exports = mongoose.model('Category', CategorySchema);
