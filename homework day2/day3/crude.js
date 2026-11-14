const mongoose = require('mongoose');
const express = require('express');
const { connectdb } = require('./db');
const empschema = mongoose.Schema({

name:{
    type: String,
    required: true,
   },
  salary:{
    type: Number,
    required: true,
  },
  dept:{
    type: String,
    required: true,
  }

},{timestamps: true})

const empmodel = mongoose.model('emp', empschema);
connectdb()

const app = express();
 app.use(express.json());

 app.get("/",async(req,resp)=>{
    try {
        const emps = await empmodel.find();
        resp.json(emps);
    } catch (error) {
        console.error("error");
    }
 });
 
 app.post("/addData",async(req,resp)=>{
    try {
        const {name,salary,dept} = req.body;
        const result = await empmodel({name,salary,dept});
        resp.json(result);
    
    } catch (error) {
       console.log("error");
    }
 });
 
 app.patch("/update/:id",async(req,resp)=>{
    try{
        const result = await empmodel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        resp.json(result);
    } catch (error) {
        console.log("error");
    }
 });


 app.listen(4000,()=>{
    console.log(" running ");
 })