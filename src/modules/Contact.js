const mongoose = require("mongoose")

const Contact = mongoose.Schema({
  email:String
})

module.exports = mongoose.model("contacts",Contact)