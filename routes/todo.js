const express=require('express');
const router=express.Router();
const Todo=require('../models/Todo');
const auth=require('../middleware/authMiddleware');

router.get('/',auth,async (req,res)=>{
    const todos=await Todo.find({user:req.user});
    res.json(todos);
});

router.post("/",auth,async (req, res) => {
  try {
    const {title,subtasks }=req.body;
    const newTodo=new Todo({
      title,
      subtasks,
      user:req.user
    });
    await newTodo.save();
    res.json(newTodo);
  } catch(err) {
    res.status(500).json({error:err.message });
  }
});

router.post("/:id/subtask", auth, async (req, res) => {
  try {
    const { title } = req.body;
    const todo = await Todo.findById(req.params.id);
    todo.subtasks.push({ title });
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/:id',auth,async(req,res)=>{
  try{
    const {title}=req.body;
    const updatedTodo=await Todo.findByIdAndUpdate({_id:req.params.id,user:req.user},{title},{new:true});
    res.json(updatedTodo);
  }catch(err){
    res.status(500).json({error:err.message});
  }
})

router.delete("/:id",auth,async (req,res)=>{
  try{
    await Todo.findByOneAndDelete({_id:req.params.id,user:req.user});
    res.json({message:"Deleted"});
  }catch(err){
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id/subtask/:subId",auth,async (req, res) => {
  try {
    const {id,subId}=req.params;
    const todo=await Todo.findOne({_id:id,user:req.user});
    const subtask=todo.subtasks.id(subId);
    subtask.isCompleted=!subtask.isCompleted;
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports=router