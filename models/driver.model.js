const mongoose=require('mongoose')

const driverSchema=new mongoose.Schema({
    name:{type:String,required:true},
    location:{type:String,required:true},
    noofrides:{type:String,required:true},
    rating:{type:String,required:true}
})

const DriverModel=mongoose.model("driver",driverSchema)

module.exports=DriverModel