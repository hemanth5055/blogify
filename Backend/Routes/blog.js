const express = require("express");
const mongoose = require("mongoose")
const Blog = require("../Models/blog")
const router = express.Router();

router.post("/upload",async(req,res)=>{
    const {title,body,createdDate,ownerName,writtenBy} = req.body;
    const response = await Blog.create({...req.body});
    if(!response) return res.json({"event":"false"})
    return res.json({"event":"true","data":response}) 

})
router.post("/all",async(req,res)=>{
    const userId = req.body.userId;
    const response =  await Blog.find({"writtenBy": { $ne:userId}});
    if(!response) return res.json({"event":"false"})
    return res.json({"event":"true","data":response})
})
router.post("/allmy",async(req,res)=>{
    const userId = req.body.userId;
    const response =  await Blog.find({"writtenBy":userId});
    if(!response) return res.json({"event":"false"})
    return res.json({"event":"true","data":response})
})
router.get("/:id",async(req,res)=>{
    const blogId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(blogId)) {
        return res.json({ event: "false", "message": "Invalid blog ID format" });
    }
    const response =  await Blog.findById(blogId);
    if(!response) return res.json({"event":"false", "message": "Invalide Link" })
    return res.json({"event":"true","data":response})
})

module.exports = router