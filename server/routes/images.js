const ROLE = require("../roles.json");
const auth = require("../middleware/auth");
const authPage = require("../middleware/authPage");

const multer = require("multer");
const upload = multer();

const image = require("../controllers/image");
const express = require("express");
const router = express.Router();

router.get("/", [auth, authPage([ROLE.USER])], image.getAllImages);
router.get("/:id", [auth, authPage([ROLE.USER])], image.getImage);
router.get(
    "/view-image/:id",
    [auth, authPage([ROLE.USER])],
    image.viewImage
  );
router.post("/", [auth, authPage([ROLE.USER])], upload.single("image"), image.postImage);
// router.put("/:id", image.putImage);
router.delete("/:id", [auth, authPage([ROLE.USER])], image.deleteImage);

module.exports = router;
