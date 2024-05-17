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
//when using this keyword you dont use arrow functions
userSchema.statics.signup=async function (email,password){
    const exists=await this.findOne({email})

    if(exists){
        throw Error('Email already in use')
    }

    //hashing password using bcrypt
    const salt = await bcrypt.genSalt(10) //10 is the number of iterations to create the salt
    const hash = await bcrypt.hash(password,salt)

    const user=await this.create({
         email,
         password:hash
    })

    return user
}

module.exports=mongoose.model('User',userSchema)