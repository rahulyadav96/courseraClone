




const express = require("express");

const Degree = require("../models/degree.model.js");

const Program = require("../models/programs.model")



const router = express.Router();


router.get("/:id", async (req, res) => {


    const prog = await Program.findById(req.params.id).lean().exec()

   return res.render("register.ejs",{

        prog: prog
    
    })

})

    
 module.exports = router









