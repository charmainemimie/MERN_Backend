const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config();
//express setup
const app=express()

//the workouts routes
const workoutRoutes=require('./routes/workouts')

//connect to db
mongoose.connect(process.env.MONGODB_ONLINE) //returns a promise
    .then(()=>{
        //listen for requests
        app.listen(PORT, () => {
            console.log(`connected to db & listening on port ${PORT}...`);
          });
    })
    .catch((error)=>{
        console.log(error)
    })

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


