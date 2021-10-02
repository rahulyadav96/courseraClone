const express = require('express');
const router = express.Router();
const ejs = require('ejs');
const myLayouts = require('express-ejs-layouts');

router.get("/", (req,res)=>{
    res.render("index")
});

module.exports = router;
