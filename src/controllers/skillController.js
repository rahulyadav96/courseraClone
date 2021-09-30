const express = require("express");

const Skill = require("../models/skill.model");
//console.log(Prop.property);
const router = express.Router();


//create a new propertry
router.post("", async (req,res)=>{
    
    const skill = await Skill.create(req.body);

    return res.status(201).send({skill});
})

//get all properties
router.get("", async (req,res)=>{
    const skills = await Skill.find().lean().exec();

    return res.status(200).send({skills});
});

//modify a property
router.patch("/:id", async (req,res)=>{
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {new:true});

    return res.status(200).send({skill});
});

//delete a property

router.delete("/:id", async(req,res)=>{
    const skill = await Skill.findByIdAndDelete(req.params.id);

    return res.status(200).send({skill});
});

//find a singal property
router.get("/:id", async (req,res)=>{
    const skill = await Skill.findById(req.params.id).lean().exec();

    return res.status(200).send({skill});
});

module.exports = router;