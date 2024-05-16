const mongoose=require('mongoose')

const Schema = mongoose.Schema

//SCHEMA -takes 2 args--- define a document structure and set timestanps
const userSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
  
},{timestamps:true})

module.exports=mongoose.model('User',userSchema)