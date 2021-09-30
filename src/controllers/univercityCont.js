const express = require("express");

const Univercity = require("../models/univercity.model");

const router = express.Router();


//create a new propertry
router.post("", async (req,res)=>{
  
    const univercity = await Univercity.create(req.body);

    return res.status(201).send({univercity});
})

//get all properties
router.get("", async (req,res)=>{
    const univercities = await Univercity.find().lean().exec();

    return res.status(200).send({univercities});
});

//modify a property
router.patch("/:id", async (req,res)=>{
    const univercity = await Univercity.findByIdAndUpdate(req.params.id, req.body, {new:true});

    return res.status(200).send({univercity});
});

//delete a property

router.delete("/:id", async(req,res)=>{
    const univercity = await Univercity.findByIdAndDelete(req.params.id);

    return res.status(200).send({univercity});
});

//find a singal property
router.get("/:id", async (req,res)=>{
    const univercity = await Univercity.findById(req.params.id).lean().exec();

    return res.status(200).send({univercity});
});

module.exports = router;