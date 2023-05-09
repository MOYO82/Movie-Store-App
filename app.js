const express = require ('express')
const mongoose = require ('mongoose');
const userRouter = require('./src/routes/user.router.js');

require("dotenv").config();
require("./config/database").connect();


const app = express();
const port = Number(process.env.PORT) || 4000;



// Middlewares
app.use(express.json())
app.use('/api/v1/movies', moviesRoute)

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



const express = require('express');
const app = express();

// Import and use the authentication middleware
const authenticate = require('./middleware/authenticate');

// Apply the middleware to the required routes
app.get('/protected-route', authenticate, (req, res) => {
  // Handle the protected route logic
});

app.post('/another-protected-route', authenticate, (req, res) => {
  // Handle another protected route logic
});

// Other routes and middleware...

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});