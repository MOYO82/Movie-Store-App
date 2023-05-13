const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');
const {User, validate} = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
});




const auth = require('../middleware/auth');

const user = require('../controllers/user.js');

router.get('/', auth, stuffs.getAllStuff);
router.post('/', auth, stuffs.createThing);
router.get('/:id', auth, stuffs.getOneThing);
router.put('/:id', auth, stuffs.modifyThing);
router.delete('/:id', auth, stuffs.deleteThing);

module.exports = router;