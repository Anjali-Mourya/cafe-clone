const mongoose = require("mongoose")

const Banner2 = mongoose.Schema({
  heading:String,
  title:String,
  subTitle:String,
  linkText:String,
  linkUrl:String,
  image:String,
})

module.exports = mongoose.model("bannerTwos",Banner2)