const express = require("express");
const CustomerModel =require('../models/customer.model')
const router = express.Router();

router.get("",async(req,res)=>{
    try {
        const Customer=await  CustomerModel.find();
         res.status(201).send(Customer)
         console.log(Customer);
    } catch (error) {
        res.status(400).send({Error: error.message})
    }
    
})

router.post("",async(req,res)=>{
    try {
        const Customer=await CustomerModel.create(req.body);
         res.status(201).send(Customer)
    } catch (error) {
        res.status(400).send({Error: error.message})
    }   
})

module.exports=router;