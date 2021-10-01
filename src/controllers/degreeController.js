const express = require("express");

const Degree = require("../models/degree.model.js");

const router = express.Router();

//post request

router.post("", async (req, res) => {

    const degree = await Degree.create(req.body)

    return res.status(201).send({ degree })


})


router.get("", async (req, res) => {
    


   Degree.find({}, function (err, degrees) {

        res.render("degree", {

            degreeList: degrees

        })




    })

 


})

module.exports = router

