const mongoose=require('mongoose')

const customerSchema=new mongoose.Schema({
    name:{type:String,required:true},
    location:{type:String,required:true},
    noofrides:{type:String,required:true},
    rating:{type:String,required:true}
})

const CustomerrModel=mongoose.model("customer",customerSchema)

module.exports=CustomerrModel