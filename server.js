const express=require('express')
require('dotenv').config();
//express setup
const app=express()


const PORT = process.env.PORT || 4000; // Use the port from the environment variable or default to 400

//get request
app.get('/',(req,res)=>{
    res.json({
        type:'GET',
        message:'Welcome to the app'
    })
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});