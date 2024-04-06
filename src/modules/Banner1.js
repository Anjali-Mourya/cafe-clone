const mongoose =require("mongoose")

const Banner1 = mongoose.Schema({
  text:String,
  titleOne:String,
  titleTwo:String,
  linkTextOne:String,
  linkTextTwo:String,
  linkOneUrl:String,
  linkTwoUrl:String
})

module.exports = mongoose.model("bannerOnes",Banner1)