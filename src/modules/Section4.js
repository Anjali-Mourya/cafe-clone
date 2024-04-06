const mongoose = require("mongoose")

const Section4 = mongoose.Schema({
  title1:String,
  title2:String,
  subTitle:String,
  linkText:String,
  linkUrl:String,
  imageUrl:String
})
module.exports = mongoose.model("section4s",Section4)