const express = require("express");

const Degree = require("../models/degree.model.js");

const Program = require("../models/programs.model")


const router = express.Router();

router.get("", async (req, res) => {
    
    // Post.find({}).populate('_user').exec(function(err, allPosts){

    Degree.find({}).populate("programs").exec(function (err, degrees) {

        
 
         res.render("explore", {
 
             degreeList: degrees
 
         })
 
 
 
 
     })
 
  
 
 
 })
 
 module.exports = router









