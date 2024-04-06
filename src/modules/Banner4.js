const mongoose = require("mongoose")

const Banner4 = mongoose.Schema({
  heading:String,
  title:String,
  subTitle:String,
  linkText:String,
  linkUrl:String,
  image:String,
})

module.exports = mongoose.model("bannerFours",Banner4)