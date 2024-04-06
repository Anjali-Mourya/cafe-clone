const mongoose =require("mongoose")

const Menu1 = mongoose.Schema({
  title1:String,
  subTitle1:String,
  subTitle2:String,
  subTitle3:String,
  subTitle4:String,
})

module.exports = mongoose.model("menu1s",Menu1)