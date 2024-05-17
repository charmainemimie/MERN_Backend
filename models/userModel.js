const mongoose=require('mongoose')
const Schema = mongoose.Schema
const bcrypt=require('bcrypt')

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

//static signup method
userSchema.statics.signup=async (email,password)=>{
    const exists=await this.findOne({email})

    if(exists){
        throw Error('Email already in use')
    }

    //hashing password using bcrypt
    
}

module.exports=mongoose.model('User',userSchema)