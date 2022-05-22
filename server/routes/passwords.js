const ROLE = require("../roles.json");
const auth = require("../middleware/auth");
const authPage = require("../middleware/authPage");
const password = require("../controllers/password");
const express = require("express");
const router = express.Router();

router.get("/", [auth, authPage([ROLE.USER])], password.getAllPasswords);
router.get("/:id", password.getPassword);
router.get(
  "/view-password/:id",
  [auth, authPage([ROLE.USER])],
  password.viewPassword
);
router.post("/", password.postPassword);
router.put("/:id", password.putPassword);

module.exports = router;
