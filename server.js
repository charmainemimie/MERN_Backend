const express=require('express')

require('dotenv').config();
//express setup
const app=express()

//the workouts routes
const workoutRoutes=require('./routes/workouts')

const PORT = process.env.PORT || 4000; // Use the port from the environment variable or default to 400

//START ADDING MIDDLEWARE
//middleware for json-for all requests that send data to the server
app.use(express.json())

// middleware to get the path and method for the request
app.use((req,res,next)=>{
    console.log('path = '+req.path, 'and method = '+req.method)
    next() //to go to the next fct
})
  
//middleware to use the routes
app.use('/api/workouts', workoutRoutes)
//END OF MIDDLEWARE


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});