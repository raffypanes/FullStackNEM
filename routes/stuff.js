// This is the ROUTE Module
const express = require('express');
const router = express.Router();
/* AUTHENTICATION middleware */
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
/* CONTROLLER */
const stuffCtrl = require('../controllers/stuff');
/* ROUTE Declrations */
router.get('/', auth, stuffCtrl.getAllStuff);
router.post('/', auth, multer, stuffCtrl.createThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);

module.exports = router;