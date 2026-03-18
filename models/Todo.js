const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema({
    title:String,
    completed:Number,
    total:Number,
    userId:String
});

module.exports=mongoose.model("Todo",todoSchema);