const express = require("express");
const path = require("path")
const connect = require("./config/db");
const ejs = require('ejs');
const myLayouts = require('express-ejs-layouts');


const app = express()
const port = 3932;
app.use(express.json())
//static files

app.use(express.static("public"));
app.use('/css', express.static(__dirname + './public/css'))
app.use('/js', express.static(__dirname + './public/js'))
app.use(myLayouts)  
app.set("view engine", "ejs")


//Working for express and views:-




//setting up default view path
app.set("views", path.join(__dirname, "views"))

app.use(express.urlencoded({ extended: false}))


//controllers
const indexController = require("./controllers/indexController")
const propCont = require("./controllers/propController");
const unCont = require("./controllers/univercityCont");
const insCont = require("./controllers/instructorController");
const courseCont = require("./controllers/courseController");
const skillCont  = require("./controllers/skillController");

//programs and dergree controllers

const programController = require("./controllers/programController")

const degreeController = require("./controllers/degreeController")

const exploreController = require("./controllers/exploreController")





app.use("/",indexController)
// app.get("/", (req, res) => {
//     // res.sendFile('courseraColone/index.html')
//     res.render("index",{title :'Home Page'})
// })
app.use("/properties", propCont);
app.use("/courses", courseCont);
app.use("/univercities",unCont);
app.use("/instructors", insCont);
app.use("/skills", skillCont);

app.use("/programs", programController)

app.use("/degrees", degreeController)

app.use("/explore", exploreController)


//server running on
app.listen(port, async()=>{
    await connect(); //connecting with database
    console.log(`linstening on port: ${port}`);
})