const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

//express setup
const app = express();

//START ADDING MIDDLEWARE
// cors
app.use(cors());

//middleware for json-for all requests that send data to the server
app.use(express.json());

// middleware to get the path and method for the request
app.use((req, res, next) => {
  console.log("path = " + req.path, "and method = " + req.method);
  next(); //to go to the next fct
});

//the workouts routes
const workoutRoutes = require("./routes/workoutRoutes");

//connect to db
mongoose
  .connect(process.env.MONGODB_ONLINE) //returns a promise
  .then(() => {
    //listen for requests
    app.listen(PORT, () => {
      console.log(`connected to db & listening on port ${PORT}...`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

const PORT = process.env.PORT || 4000; // Use the port from the environment variable or default to 400

// Route: Define a simple GET route for the root path
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Workout MERN Project</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #1a1a1a; /* Dark background color */
          text-align: center;
          margin-top: 100px;
          color: #fff; /* White text color */
        }
        h1 {
          font-size: 3em;
          color: #00bfff; /* Deep Sky Blue */
          margin-bottom: 20px; /* Add some space below the heading */
          animation: fadeInDown 1s ease; /* Fade in animation */
        }
        p {
          font-size: 1.2em;
          color: #ccc; /* Light Gray */
          animation: fadeInUp 1s ease; /* Fade in animation */
        }
        .developer-info {
          position: fixed;
          bottom: 10px;
          right: 10px;
          font-size: 0.8em;
          color: #888; /* Light Gray */
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      </style>
    </head>
    <body>
      <h1>Welcome to the Workouts MERN Stack API!</h1>
      <p>We collect a large amount of data from our customers with their consent, see bottom right for contact details</p>
      <div class="developer-info">
        <p>Developed by Charmaine S Mangorima</p>
        <p>Phone: +263782487769 / +213797319463</p>
        <p>Github: <a href="https://github.com/charmainemimie">charmainemimie</a></p>
      </div>
    </body>
    </html>  
    `);
});

//middleware to use the routes
app.use("/api/workouts", workoutRoutes);
//END OF MIDDLEWARE
