const express = require("express");
const DriverModel =require('../models/driver.model')
const router = express.Router();

router.get("",async(req,res)=>{
    try {
        const Driver=await  DriverModel.find();
         res.status(201).send(Driver)
         console.log(Driver)
    } catch (error) {
        res.status(400).send({Error: error.message})
    }
    
})

router.post("",async(req,res)=>{
    try {
        const Driver=await DriverModel.create(req.body);
         res.status(201).send(Driver)
    } catch (error) {
        res.status(400).send({Error: error.message})
    }   
})

module.exports=router;