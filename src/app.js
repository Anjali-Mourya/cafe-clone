const express = require("express")
const app = express()
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



mongoose.connect("mongodb://localhost/wix_com_cafe")
.then((req,res)=>{
  console.log("db connected")

/*Contactinfo2.create({
  addressIcon:"bi bi-geo-alt",
  address:"Address",
  addressText:"500 Terry Francine St. San Francisco, CA 94158",
  emailIcon:"bi bi-envelope",
  email:"email",
  emailText:"info@mysite.com",
  emailUrl:"info@mysite.com",
  phoneIcon:"bi bi-telephone",
  phone:"Phone",
  phoneNum:"123-456-7890",
  followIcon:"bi bi-hand-thumbs-up",
  follow:"Follow",
  facebook:"bi bi-facebook",
  twitter:"bi bi-twitter",
  instagram:"bi bi-instagram"
})*/


 /* Connectinfo.create({
  title:"Let's Connect",
  text1:"This cozy cafe has a warm and inviting ambiance, with",
  text2:"wooden furniture, dim lights, and relaxing music.",
  text3:"For this you can connect with us by below info."
  })*/

/*Menuitem.create({
  heading:"All Day Every Day",
  title:"Bakery",
  subTitle1:"Croissant (Plain/Chocolate)",
  text1:"Instant yeast, egg, bittersweet chocolate,",
  text2:"sugar, all purpose",
  price1:"$6.00",
  subTitle2:"Daily Muffin",
  text3:"Brown sugar, baking powder,",
  text4:"turbinado sugar,all purpose",
  price2:"$8.00",
  subTitle3:"Cheesecake",
  text5:"A cheesecake is a dessert cake made",
  text6:"of cheese (usually cream cheese but sometimes ricotta),",
  text7:"eggs, and sugar",
  price3:"$11.00",
})*/

  /*Menu1.create({
  title1:"Our Menu",
  subTitle1:"Create moments of happiness & satisfaction that will",
  subTitle2:"surely linger long in your memory through a selection",
  subTitle3:"of food & beverages which is designed to entire and",
  subTitle4:"enthrall one's senses.",
  })*/

  /*Section4.create({
    title1:"From Our Hearts",
    title2:"to Your Plate",
    subTitle:"Introducing our latest creations that are turning the gluten-free game on its head - our brand new line of gluten-free wraps.",
    linkText:"Visit Us",
    linkUrl:"/#address",
    imageUrl:"/static/images/this2.jpg"
  })*/

  /*Section3.create({
    title:"Real Food. No Secret Ingredients."
  })*/

 /* Section2.create({
  imageUrl:"/static/images/this1.jpg",
  title1:"The Best Bite in",
  title2:"the Neighborhood",
  subTitle:"People of all ages eat better when they share a meal with others. They tend to eat more fruits and vegetables and other nutrient-rich foods. They also eat less pop and fried foods. Eating together gives young children the chance to learn more words and how to communicate better.",
  linkText:"View More",
  linkUrl:"/menu"
  })*/

  /*Us.create({
    heading:"This Is Us",
    subHeading:"We're big believers in the power of a good meal and a friendly place to eat it. Stop by for fresh, locally sourced food, served with a warm smile."
  })*/

/*Footer.create({
  title1:"Newsletter",
  subTitle1:"Stay up to date with all the latest from 47th Cafe",
  email:"Email",
  inputBtn:"Join",
  title2:"Talk to Us",
  subTitle2:"123-456-7890",
  subTitle3:"info@mysite.com",
  subTitle4:"500 Terry Francine St.",
  subTitle5:"San Francisco, CA 94158",
  social1:"Instagram",
  social2:"Facebook",
  social3:"Twitter",
  icon:"bi bi-c-circle",
  footer:"2035 by 47th Cafe . Powered and secured by Wix"
})*/

  /*Banner5.create([
    {
    heading:"Drop By for a Bite.",
    titleOne:"Address",
    titleTwo:"Opening Hours",
    subTitleOne:"500 Terry Francine St.",
    subTitleOne2:"San Francisco, CA 94158",
    subTitleTwo:"Mon - Fri: 9am - 6pm",
    subTitleTwo2:"​​Saturday: 10am - 2pm",
    subTitleTwo3:"​Sunday: Closed"
  },

])*/

  /*Banner4.create({
    heading:"Enjoy.",
  title:"Make Yourself at Home",
  subTitle:"Keep it simple and enjoyable. You will create positive food memories that last a lifetime!",
  linkText:"See More",
  linkUrl:"/menu",
  image:"/static/images/enjoy.webp"
  })*/

  /*Banner3.create({
    heading:"Drink.",
  title:"The Freshest Cup in Town",
  subTitle:"Have a brewtiful day!I've bean thinking about you a latte.To bean or not to bean Coffee – the most important meal of the day.Stay grounded, stay woke!This is made espresso-ly for you.Everything I brew, I brew it for you.",
  linkText:"See More",
  linkUrl:"/menu",
  image:"/static/images/coffee.webp"
  })*/

 /* Banner2.create({
    heading:"Eat.",
  title:"Breakfast, Lunch and Artisanal Pastries",
  subTitle:"Eating pastries can boost your mood and provide your body with the energy it needs to go through the day. Additionally, the nutrients found in pastries can improve your heart health, reduce inflammation, and protect against certain chronic diseases.",
  linkText:"See More",
  linkUrl:"/menu",
  image:"/static/images/food.jpg"
  })*/

 /* Swiper.create({
    textOne:"Weekend Brunch     I    Saturday 9am - 2pm",
    textTwo:"Daily Deal    |   Coffee & Pastry $3.99"
  })*/

  /*Banner1.create({
    text:"Cafe & Restaurant Est. 2035",
  titleOne:"Your Go-to Spot for",
  titleTwo:"Delicious Eats & Coffee",
  linkTextOne:"Order Online",
  linkTextTwo:"Order Menu",
  linkOneUrl:"/order",
  linkTwoUrl:"/menu"
  })*/


 /* Navdetail.create({
    firstTitle:"47th",
    title:" cafe",
    links:[
      {
        label:"Home",
        url:"/"
      },
      {
        label:"This IS Us",
        url:"/this-us"
      },
      {
        label:"Menu",
        url:"/menu"
      },
      {
        label:"Contact Us",
        url:"/contact-us"
      },
    ]
  })*/
})
.catch((e)=>{
  console.log(e)
})

app.listen(process.env.PORT | 4455,()=>{
  console.log("server started")
})