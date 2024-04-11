const express = require("express")
const app = express()
const dbUrl = "mongodb+srv://ajm7307:anjali222@cluster0.8png5xj.mongodb.net/"
const hbs = require("hbs")
const routes = require("./routes/main")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Navdetail = require('./modules/Navdetail')
const Banner1 = require("./modules/Banner1")
const Swiper = require("./modules/Slide")
const Banner2 = require("./modules/Banner2")
const Banner3 = require("./modules/Banner3")
const Banner4 = require("./modules/Banner4")
const Banner5 = require("./modules/Banner5")
const Footer = require("./modules/Footer")
const Us = require("./modules/Us")
const Section2 = require("./modules/Section2")
const Section3 = require("./modules/Section3")
const Section4 = require("./modules/Section4")
const Menu1 = require("./modules/Menu1")
const Menuitem = require("./modules/Menuitem")
const Connectinfo = require("./modules/Connectinfo")
const Contactinfo2 = require("./modules/Contactinfo2")


// middleware
app.use(bodyParser.urlencoded({
extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes)

app.set("view engine","hbs")
app.set("views","views")
hbs.registerPartials("views/partials")



mongoose.connect(dbUrl).then(()=>{
  console.info("connected to the db")

})
.catch((e)=>{
  console.log(e)
})

app.listen(process.env.PORT | 4455,()=>{
  console.log("server started")
})