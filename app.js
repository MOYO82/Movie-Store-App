import express from 'express';
import mongoose from 'mongoose';
import {userRouter} from './src/routes/user.router.js'
import {taskRouter} from './src/routes/task.router.js'
import auth from './src/middlewares/auth.js';


require("dotenv").config()

require("./config/database").connect();


const app = express()
const port = Number(process.env.PORT) || 4000;

mongoose.connect(process.env.DATABASE_CONNECTION_URL).then(() => console.log('Database Connected to MongoDB...')).catch(err => console.error('Could not connect to MongoDB...'));



// Middlewares
app.use(morgan('tiny'))
app.use(express.json())


 const User = require("./model/user");

// Register
app.post("/register", (req, res) => {
// our register logic goes here...
});

// Login
app.post("/login", (req, res) => {
// our login logic goes here
});



app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

module.exports = app;

// server listening 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

