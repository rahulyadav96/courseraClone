const express = require("express");

const Instructor = require("../models/instructor.model");

const router = express.Router();


//create a new propertry
router.post("", async (req,res)=>{
    
    const instructor = await Instructor.create(req.body);

    return res.status(201).send({instructor});
})

//get all properties
router.get("", async (req,res)=>{
    const instructors = await Instructor.find().lean().exec();

    return res.status(200).send({instructors});
});

//modify a property
router.patch("/:id", async (req,res)=>{
    const instructor = await Instructor.findByIdAndUpdate(req.params.id, req.body, {new:true});

    return res.status(200).send({instructor});
});

//delete a property

router.delete("/:id", async(req,res)=>{
    const instructor = await Instructor.findByIdAndDelete(req.params.id);

    return res.status(200).send({instructor});
});

//find a singal property
router.get("/:id", async (req,res)=>{
    const instructor = await Instructor.findById(req.params.id).lean().exec();

    return res.status(200).send({instructor});
});

module.exports = router;