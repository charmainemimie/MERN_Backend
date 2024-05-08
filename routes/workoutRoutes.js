const express=require('express')
const {createWorkout,
    getWorkouts,
    getWorkout,
}=require('../controllers/workoutController')


//express setup
const router=express.Router()

//get all workouts
router.get('/',getWorkouts)

//get a single workout
router.get('/:id',getWorkout)

//post a new workout
router.post('/',createWorkout)

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