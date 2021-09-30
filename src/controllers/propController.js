const express = require("express");

const Prop = require("../models/crs_properties.model");

const router = express.Router();


//create a new propertry
router.post("", async (req,res)=>{
  
    const property = await Prop.create(req.body);

    return res.status(201).send({property});
})

//get all properties
router.get("", async (req,res)=>{
    const properties = await Prop.find().lean().exec();

    return res.status(200).send({properties});
});

//modify a property
router.patch("/:id", async (req,res)=>{
    const property = await Prop.findByIdAndUpdate(req.params.id, req.body, {new:true});

    return res.status(200).send({property});
});

//delete a property

router.delete("/:id", async(req,res)=>{
    const property = await Prop.findByIdAndDelete(req.params.id);

    return res.status(200).send({property});
});

//find a singal property
router.get("/:id", async (req,res)=>{
    const property = await Prop.findById(req.params.id).lean().exec();

    return res.status(200).send({property});
});

module.exports = router;