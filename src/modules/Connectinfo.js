const mongoose = require("mongoose")

const Connectinfo = mongoose.Schema({
  title:String,
  text1:String,
  text2:String,
  text3:String
})

module.exports = mongoose.model("connectinfos",Connectinfo)