const express = require("express");

const Course = require("../models/course.model");

const router = express.Router();


//create a new course
router.post("", async (req,res)=>{
   
    const course = await Course.create(req.body);

    return res.status(201).send({course});
})

//get all courses
router.get("", async (req,res)=>{
    const courses = await Course.find().populate("univercity").populate("skills").populate("properties").lean().exec();
    
   // return res.status(200).send({courses});
    res.render('./courses/allCourses',{
        courses:courses,
    })
});

//modify a course
router.patch("/:id", async (req,res)=>{
    const univercity = await Course.findByIdAndUpdate(req.params.id, req.body, {new:true});

    return res.status(200).send({univercity});
});

//delete a course

router.delete("/:id", async(req,res)=>{
    const course = await Course.findByIdAndDelete(req.params.id);

    return res.status(200).send({course});
});

//find a singal course
router.get("/:id", async (req,res)=>{
    const course = await Course.findById(req.params.id).populate("univercity").populate("skills").populate("properties").populate("instructor").lean().exec();

    //return res.status(200).send({course});
     res.render("./courses/aboutCourse",{
        course:course
     })
});
//redirecting on checkout page
router.get("/:id/checkout", async(req, res)=>{
    const course = await Course.findById(req.params.id).populate("univercity").populate("skills").populate("properties").populate("instructor").lean().exec();
    res.render("./courses/courseCheckout",{
        course:course
    })
})



module.exports = router;