const express = require("express");

const Degree = require("../models/degree.model.js");

const Program = require("../models/programs.model")



const router = express.Router();

// router.get("", async(req, res) =>{

//     const explore = await Degree.find().lean().exec()

//     return res.send({explore})


// })





router.get("/:id", async (req, res) => {


    const explore = await Degree.findById(req.params.id).populate("programs").lean().exec()

    // return res.send({explore})

    

   return res.render("explore.ejs",{

        explore: explore
    
    })

})


        

 
 module.exports = router









