const mongoose = require("mongoose")

const Us = mongoose.Schema({
  heading:String,
  subHeading:String
})

module.exports = mongoose.model("us",Us)