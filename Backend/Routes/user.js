const express = require("express");
const User = require("../Models/user")
const  {getKey,validateKey} = require("../Service/auth")
const router = express.Router();

router.post("/login",async (req,res)=>{
    const {email,password} = req.body;
    const result = await User.findOne({email,password})
    if(!result) return res.json({"event":"false"})
    const payload = {
        id:result._id,
        name:result.name,
        email:result.email,
    }
    const token = getKey(payload);
    return res.cookie("token",token).json({"token":token});
    
})
router.post("/signup",async(req,res)=>{
    const result = await User.create({...req.body})
    if(!result) return res.json({"event":"false"})
    return res.status(201).json({"event":"true","id":result._id})
})

router.get("/check",(req,res)=>{
    const token = req.cookies.token;
    try{
        const user=validateKey(token)
        console.log(user)
        if(!user) return res.json({"event":"false"});
        return res.json({"event":"true","user":user});
    }
    catch(error){
        return res.json({"event":"false"});
    }
})
module.exports = router