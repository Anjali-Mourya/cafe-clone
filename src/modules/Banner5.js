const mongoose = require("mongoose")

const Banner5 = mongoose.Schema({
  heading:String,
  titleOne:String,
  titleTwo:String,
  subTitleOne:String,
  subTitleOne2:String,
  subTitleTwo:String,
  subTitleTwo2:String,
  subTitleTwo3:String,

})

module.exports = mongoose.model("bannerFives",Banner5)