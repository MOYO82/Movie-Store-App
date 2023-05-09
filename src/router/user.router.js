const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const stuffs = require('../controllers/stuff');

router.get('/', auth, stuffs.getAllStuff);
router.post('/', auth, stuffs.createThing);
router.get('/:id', auth, stuffs.getOneThing);
router.put('/:id', auth, stuffs.modifyThing);
router.delete('/:id', auth, stuffs.deleteThing);

module.exports = router;