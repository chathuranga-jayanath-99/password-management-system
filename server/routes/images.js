const image = require('../controllers/image');
const express = require('express');
const router = express.Router();

router.get('/', image.getAllImages);
router.get('/:id', image.getImage);
router.post('/', image.postImage);
router.put('/:id', image.putImage);

module.exports = router;