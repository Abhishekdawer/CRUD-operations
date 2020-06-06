const express = require('express');
const mongoose = require('mongoose');
const CourseModel = mongoose.model("Course");
const router= express.Router();

router.get("/list",(req,res)=>{
    var course = 
    CourseModel.find((err,docs)=>{
        if(!err)
        {
            console.log(docs);
            res.send("Course Controller");
        }
        else
        {
            console.log("Error");
        }
    });
   
});

router.get("/add",(req,res)=>{
    res.render("add-course");
});

router.post("/add",(req,res)=>{
    var course = new CourseModel();
    course.courseName = req.body.courseName;
    course.courseDuration= req.body.courseDuration;
    course.courseFee = req.body.courseFee;
    course.courseId = Math.ceil(Math.random()*100000)+"";
    course.save((err,doc)=>{
        if(!err)
        {
            res.redirect("/course/list");
        }
        else
        {
            res.send("Error Occured!");
        }
    });
    
});

module.exports = router;