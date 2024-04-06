const mongoose = require("mongoose")

const Section3 = mongoose.Schema({
  title:String,
})
module.exports = mongoose.model("section3s",Section3)