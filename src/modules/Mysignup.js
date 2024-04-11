const mongoose = require("mongoose")

const Mysignup = mongoose.Schema({
  firstName:{
   type:String,
   required:true,
  },
  lastName:{
    type:String,
    required:true,
   },
  myemail:{
    type: String,
    required:true,
    unique:true
  },
  password:{
    type: String,
    required:true,
    unique:true
  },

})

module.exports = mongoose.model("signups",Mysignup) 