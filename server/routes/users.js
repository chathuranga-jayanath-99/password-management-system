const ROLE = require('../roles.json');
const auth = require('../middleware/auth');
const authPage = require('../middleware/authPage');
const user = require('../controllers/user');
const express = require('express');
const router = express.Router();

router.get('/', [auth, authPage([ROLE.ADMIN])], user.getAllUsers);
router.get('/:id', [auth, authPage([ROLE.ADMIN])], user.getUser);
router.get('/me', [auth, authPage([ROLE.USER])], user.getMe);
router.post('/', user.postUser);
router.put('/:id', [auth, authPage([ROLE.ADMIN])], user.putUser);
router.put('/me', [auth, authPage([ROLE.USER])], user.putMe);

module.exports = router;
