const mongoose = require("mongoose")

const Swiper = mongoose.Schema({
  textOne:String,
  textTwo:String
})

module.exports = mongoose.model("swipers",Swiper)