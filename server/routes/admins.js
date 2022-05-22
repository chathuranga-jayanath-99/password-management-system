const ROLE = require('../roles.json');
const auth = require('../middleware/auth');
const authPage = require('../middleware/authPage');
const admin = require('../controllers/admin');
const express = require('express');
const router = express.Router();

router.get('/', [auth, authPage([ROLE.ADMIN])], admin.getAllAdmins);
router.get('/:id', [auth, authPage([ROLE.ADMIN])], admin.getAdmin);
router.post('/', admin.postAdmin);
router.put('/:id', [auth, authPage([ROLE.ADMIN])], admin.putAdmin);
router.get('/me', [auth, authPage([ROLE.ADMIN])], admin.getMe);
router.put('/me', [auth, authPage([ROLE.ADMIN])], admin.putMe);

module.exports = router;