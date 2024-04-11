const express = require("express")
const routes = express.Router()
const Navdetail = require("../modules/Navdetail")
const Banner1 = require("../modules/Banner1")
const Swiper = require("../modules/Slide")
const Banner2 = require("../modules/Banner2")
const Banner3 = require("../modules/Banner3")
const Banner4 = require("../modules/Banner4")
const Banner5 = require("../modules/Banner5")
const Footer = require("../modules/Footer")
const Contact = require("../modules/Contact")
const Us = require("../modules/Us")
const Section2 = require("../modules/Section2")
const Section3 = require("../modules/Section3")
const Section4 = require("../modules/Section4") 
const Menu1 = require("../modules/Menu1")
const Menuitem = require("../modules/Menuitem")
const Connectinfo = require("../modules/Connectinfo")
const Contactinfo = require("../modules/Contactinfo")
const Contactinfo2 = require("../modules/Contactinfo2")
const Mysignup = require("../modules/Mysignup");




routes.get("/home",async(req,res)=>{
  const navdetails = await Navdetail.findOne({"_id":"6607c246b95e696dd0a5b5d6"})
 const bannerOnes = await Banner1.find()
 const swipers = await Swiper.find()
 const bannerTwos = await Banner2.find()
 const bannerThrees = await Banner3.find()
 const bannerFours = await Banner4.find()
 const bannerFives = await Banner5.find()
 const footers = await Footer.find()

  res.render('index',{
    navdetails:navdetails,
    bannerOnes:bannerOnes,
    swipers:swipers,
    bannerTwos:bannerTwos,
    bannerThrees:bannerThrees,
    bannerFours:bannerFours,
    bannerFives:bannerFives,
    footers:footers

})
})


routes.get("/this-us",async(req,res)=>{
  const navdetails = await Navdetail.findOne({"_id":"6607c246b95e696dd0a5b5d6"})
  const us = await Us.find()
  const section2s = await Section2.find()
  const section3s = await Section3.find()
  const section4s = await Section4.find()
 const footers = await Footer.find()


    res.render('us',{
    navdetails:navdetails,
    us:us,
    section2s:section2s,
    section3s:section3s,
    section4s:section4s,
    footers:footers

  });
})

routes.get("/menu",async(req,res)=>{
  const navdetails = await Navdetail.findOne({"_id":"6607c246b95e696dd0a5b5d6"})
  const menu1s = await Menu1.find()
  const menuitems = await Menuitem.find()
 const footers = await Footer.find()

  res.render('menu',{
    navdetails:navdetails,
    menu1s:menu1s,
    menuitems:menuitems,
    footers:footers
  })
})
routes.get("/contact-us",async(req,res)=>{
  const navdetails = await Navdetail.findOne({"_id":"6607c246b95e696dd0a5b5d6"})
  const connectinfos = await Connectinfo.find()
  const contactinfo2s = await Contactinfo2.find()
 const footers = await Footer.find()


  res.render('connect',{
    navdetails:navdetails,
    connectinfos:connectinfos,
    contactinfo2s:contactinfo2s, 
    footers:footers


  })
})

routes.get("/",async(req,res) =>{
  res.render('mysignup')
})
routes.get("/login",async(req,res)=>{
  res.render("login")
})



routes.post("/process-contact-form",async(req,res)=>{
  console.log(req.body)
  try {
    const data = await Contact.create(req.body)
    console.log(data)
    res.redirect("/home")
  } catch (error) {
    console.log(error)
    res.redirect("/home")
  }
})
routes.post("/process-contact-us-form",async(req,res)=>{
  console.log(req.body)
  try {
    const mydata = await Contactinfo.create(req.body)
    res.redirect("/contact-us")
  } catch (error) {
    console.log(error)
    res.redirect("/contact-us")
  }
})
routes.post("/process-signup-form",async(req,res)=>{
  console.log(req.body)
  try {
    const mylog = await Mysignup.create(req.body);
    res.redirect("/home")
  } catch (error) {
    console.log(error)
     res.redirect("/")
  }
})

routes.post("/process-login-form",async(req,res)=>{
 
  try {
    const check = await Mysignup.findOne({
      myemail:req.body.myemail,
    })
    if(check.password === req.body.password){
    res.redirect("/home")
    
    }else{
      res.send("wrong password")
    }
  } catch (error) {
    res.send("Both username or password is incorrect")
  }

})



module.exports = routes