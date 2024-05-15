const mongoose=require('mongoose')

const Schema = mongoose.Schema

//SCHEMA -takes 2 args--- define a document structure and set timestanps
const workoutSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    },
},{timestamps:true})

module.exports=mongoose.model('Workout',workoutSchema)