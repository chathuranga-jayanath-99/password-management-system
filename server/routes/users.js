const user = require('../controllers/user');
const express = require('express');
const router = express.Router();

router.get('/', user.getAllUsers);
router.post('/', user.postUser);

module.exports = router;
