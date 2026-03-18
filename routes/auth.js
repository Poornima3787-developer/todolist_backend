const express=require('express');
const router=express.Router();

const User=require('../models/User');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

router.post("/signup",async (req,res)=>{
    const {email,password}=req.body;

    const hashedPassword=await bcrypt.hash(password,10);

    const user=new User({email,password:hashedPassword});

    await User.save();
    res.json({message:"User Created"});
})

router.post("/login",async (req,res)=>{
    const {email,password}=req.body;

    const user=await User.findOne({email});
    if(!user) return res.status(400).json({erro:"User not found"});
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch)return res.status(400).json({error:"Wrong password"});

    const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
    res.json({token});
});

module.exports=router;
