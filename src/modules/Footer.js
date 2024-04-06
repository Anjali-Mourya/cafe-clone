const mongoose = require("mongoose")

const Footer = mongoose.Schema({
  title1:String,
  subTitle1:String,
  email:String,
  inputBtn:String,
  title2:String,
  subTitle2:String,
  subTitle3:String,
  subTitle4:String,
  subTitle5:String,
  social1:String,
  social2:String,
  social3:String,
  icon:String,
  footer:String
})

module.exports = mongoose.model("footers",Footer)