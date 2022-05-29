require("dotenv").config();
const config = require("config");
const bodyParser = require("body-parser");

const users = require("./routes/users");
const admins = require("./routes/admins");
const passwords = require("./routes/passwords");
const images = require("./routes/images");
const auth = require("./routes/auth");
const cors = require("cors");
const express = require("express");
const app = express();

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined.");
  process.exit(1);
}

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", users);
app.use("/api/admins", admins);
app.use("/api/passwords", passwords);
app.use("/api/images", images);
app.use("/api/auth", auth);
// app.use('/password-management-system/api/admins', admins);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
