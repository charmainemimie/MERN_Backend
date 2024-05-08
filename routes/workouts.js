const express=require('express')

//model
const Workout=require('../models/workoutModel')

//express setup
const router=express.Router()

//get all workouts
router.get('/',(req,res)=>{
    res.json({
        message:"GET all workouts"
    })
})

//get a single workout
router.get('/:id',(req,res)=>{
    res.json({
        message:"GET single workout"
    })
})

//post a new workout
router.post('/',async (req,res)=>{
    const {title,reps,load}=req.body //destructuring

    try{
        const workout=await Workout.create({title,reps,load})
        res.status(200).json(workout)
    }catch(error){
            res.status(400).json({error: error.message})
    }

    res.json({
        message:"POST a new workout"
    })
})

//delete a workout
router.delete('/:id',(req,res)=>{
    res.json({
        message:"DELETE a workout"
    })
})

//update a workout - PATCH
router.patch('/:id',(req,res)=>{
    res.json({
        message:"UPDATE a workout"
    })
})


module.exports=router