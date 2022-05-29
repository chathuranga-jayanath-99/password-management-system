const multer = require("multer");
const upload = multer();

const image = require("../controllers/image");
const express = require("express");
const router = express.Router();

router.get("/", image.getAllImages);
router.get("/:id", image.getImage);
router.post("/", upload.single("image"), image.postImage);
router.put("/:id", image.putImage);

module.exports = router;
