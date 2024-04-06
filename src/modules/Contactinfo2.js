const mongoose = require("mongoose")

const Contactinfo2 = mongoose.Schema({
  addressIcon:String,
  address:String,
  addressText:String,
  emailIcon:String,
  email:String,
  emailText:String,
  emailUrl:String,
  phoneIcon:String,
  phone:String,
  phoneNum:String,
  followIcon:String,
  follow:String,
  facebook:String,
  twitter:String,
  instagram:String
})

module.exports = mongoose.model("contactinfo2s",Contactinfo2)