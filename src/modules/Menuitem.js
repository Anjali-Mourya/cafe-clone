const mongoose = require("mongoose")

const Menuitem = mongoose.Schema({
  heading:String,
  title:String,
  subTitle1:String,
  text1:String,
  text2:String,
  price1:String,
  subTitle2:String,
  text3:String,
  text4:String,
  price2:String,
  subTitle3:String,
  text5:String,
  text6:String,
  text7:String,
  price3:String,

})

module.exports = mongoose.model("menuitems",Menuitem)