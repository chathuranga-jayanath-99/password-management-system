const ROLE = require("../roles.json");
const auth = require("../middleware/auth");
const authPage = require("../middleware/authPage");

const multer = require("multer");
const upload = multer();

const image = require("../controllers/image");
const express = require("express");
const router = express.Router();

router.get("/", image.getAllImages);
router.get("/:id", image.getImage);
router.get(
    "/view-image/:id",
    [auth, authPage([ROLE.USER])],
    image.viewImage
  );
router.post("/", upload.single("image"), image.postImage);
router.put("/:id", image.putImage);
router.delete("/:id", [auth, authPage([ROLE.USER])], image.deleteImage);

module.exports = router;
