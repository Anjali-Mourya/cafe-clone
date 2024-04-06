const mongoose = require("mongoose")

const Section2 = mongoose.Schema({
  imageUrl:String,
  title1:String,
  title2:String,
  subTitle:String,
  linkText:String,
  linkUrl:String
})
module.exports = mongoose.model("section2s",Section2)