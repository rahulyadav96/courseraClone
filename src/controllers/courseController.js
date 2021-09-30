const express = require("express");

const Course = require("../models/course.model");

const router = express.Router();


//create a new propertry
router.post("", async (req,res)=>{
   
    const course = await Course.create(req.body);

    return res.status(201).send({course});
})

//get all properties
router.get("", async (req,res)=>{
    const courses = await Course.find().lean().exec();

    return res.status(200).send({courses});
});

//modify a property
router.patch("/:id", async (req,res)=>{
    const univercity = await Course.findByIdAndUpdate(req.params.id, req.body, {new:true});

    return res.status(200).send({univercity});
});

//delete a property

router.delete("/:id", async(req,res)=>{
    const course = await Course.findByIdAndDelete(req.params.id);

    return res.status(200).send({course});
});

//find a singal property
router.get("/:id", async (req,res)=>{
    const course = await Course.findById(req.params.id).lean().exec();

    return res.status(200).send({course});
});

module.exports = router;