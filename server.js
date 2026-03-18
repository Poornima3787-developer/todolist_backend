const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();

const authRoutes=require('./routes/auth');
const todoRoutes=require('./routes/todo');

const app=express();

app.use(cors());
app.use(express.json());

app.use("/",authRoutes);
app.use("/todos",todoRoutes);

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log(err));

app.listen(3000,()=>{
    console.log("Server running on 3000")
})