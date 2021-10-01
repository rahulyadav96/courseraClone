const express = require("express");
const path = require("path")

const port = 3932;
//connect access database
const connect = require("./config/db");

//Working for express and views:-

const app = express()

app.use(express.json())

app.set("view engine", "ejs")
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false}))

app.set("views", path.join(__dirname, "views"))

//controllers
const propCont = require("./controllers/propController");
const unCont = require("./controllers/univercityCont");
const insCont = require("./controllers/instructorController");
const courseCont = require("./controllers/courseController");
const skillCont  = require("./controllers/skillController");

//programs and dergree controllers

const programController = require("./controllers/programController")

const degreeController = require("./controllers/degreeController")






app.use("/properties", propCont);
app.use("/courses", courseCont);
app.use("/univercities",unCont);
app.use("/instructors", insCont);
app.use("/skills", skillCont);

app.use("/programs", programController)

app.use("/degrees", degreeController)

//server running on
app.listen(port, async()=>{
    await connect(); //connecting with database
    console.log(`linstening on port: ${port}`);
})