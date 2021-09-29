const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3932;
app.use(express.json());

const connect = require("./config/db");


app.listen(port, async()=>{
    await connect();
    console.log(`linstening on port: ${port}`);
})