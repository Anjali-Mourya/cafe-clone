const mongoose = require("mongoose")

const Navdetail = mongoose.Schema({
  firstTitle:String,
  title:String,
  links:[
    {
      label:String,
      url:String
    }
  ],
})

module.exports = mongoose.model("navdetails",Navdetail)