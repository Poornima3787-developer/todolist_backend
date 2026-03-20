const express=require('express');
const router=express.Router();
const Todo=require('../models/Todo');
const auth=require('../middleware/authMiddleware');

router.get('/',auth,async (req,res)=>{
    const todos=await Todo.find({userId:user.id});
    res.json(todos);
});

router.post('/',auth,async (req,res)=>{
    const {title,completed,total}=req.body;

    const todo=new Todo({
        title,
        completed,
        total,
        userId:req.user,
    });
    await todo.save();
    res.json(todo);
})

router.put('/:id',auth,async(req,res)=>{
    await Todo.findByIdAndUpdate(req.params.id,req.body);
    res.json({message:"Updated"})
})

router.delete("/:id",auth,async (req,res)=>{
    await Todo.findByIdAndDelete(req.params.id);
    res.json({message:"Deleted"})
});

module.exports=router