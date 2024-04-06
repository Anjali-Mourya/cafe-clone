const mongoose = require("mongoose")

const Contactinfo = mongoose.Schema({
  firstName:String,
  lastName:String,
  email:String,
  message:String,
})

module.exports = mongoose.model("contactinfos",Contactinfo)