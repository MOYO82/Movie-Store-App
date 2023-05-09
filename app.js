const express = require ('express')
const mongoose = require ('mongoose');
const userRouter = require('./src/routes/user.router.js');

require("dotenv").config();
require("./config/database").connect();


const app = express();
const port = Number(process.env.PORT) || 4000;



// Middlewares
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

const auth = require("./middleware/auth");

app.post("/welcome", auth, (req, res) => {
  res.status(200).send("Welcome 🙌 ");
});

module.exports = app;

// server listening 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

