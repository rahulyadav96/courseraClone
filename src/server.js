const express = require("express");

const port = 3932;
//connect access database
const connect = require("./config/db");
//controllers
const propCont = require("./controllers/propController");
const unCont = require("./controllers/univercityCont");
const insCont = require("./controllers/instructorController");
const courseCont = require("./controllers/courseController");
const skillCont  = require("./controllers/skillController");


const app = express();
app.use(express.json());

app.use("/properties", propCont);
app.use("/courses", courseCont);
app.use("/univercities",unCont);
app.use("/instructors", insCont);
app.use("/skills", skillCont);

//server running on
app.listen(port, async()=>{
    await connect(); //connecting with database
    console.log(`linstening on port: ${port}`);
})