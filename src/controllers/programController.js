const express = require("express");

const Program = require("../models/programs.model");

const router = express.Router();

//post request

router.post("", async(req, res) => {

    const program = await Program.create(req.body)

   return res.status(201).send({program})


})

router.get("", async(req, res) => {

    const program = await Program.find().lean().exec()

    return res.status(200).send({program})
})

module.exports = router

