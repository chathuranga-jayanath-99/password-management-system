const ROLE = require("../roles.json");
const { encrypt, decrypt } = require("../util/encryptionHandler");
const _ = require("lodash");
const { Password, validate } = require("../models/password");
const { User } = require("../models/user");

async function getAllPasswords(req, res, next) {
  const user = req.user;
  let allPasswords = NaN;

  if (user.role === ROLE.USER) {
    allPasswords = await Password.findAllByUser(user.id);
  } else if (user.role === ROLE.ADMIN) {
    allPasswords = await Password.findAll(user.id);
  }
  res.send(allPasswords);
}

async function getPassword(req, res, next) {
  const user = req.user;

  const password = await Password.findById(req.params.id);
  if (!password)
    return res.status(404).send("The password with given ID not found");

  if (user.role === ROLE.USER && user.id === password.userId)
    return res.send(password);

  return res.status(403).send("Access denied");
}

async function postPassword(req, res, next) {
  console.log("post passwotd", req.body);
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findById(req.body.userId);
  if (!user) return res.status(400).send("The user not found");

  const password = new Password(
    _.pick(req.body, ["userId", "title", "password"])
  );
  password.addPasswordStrength();

  const encrypted = encrypt(password.password);
  password.password = encrypted.text;
  password.iv = encrypted.iv;

  await password.save();
  res.send(password);
}

// without userId and
async function putPassword(req, res, next) {
  const { error } = validate(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  const password = await Password.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
  });

  if (!password)
    return res.status(404).send("The customer with given ID not found.");

  res.send(password);
}

async function viewPassword(req, res, next) {
  const user = req.user;

  const password = await Password.findById(req.params.id);

  if (user.role === ROLE.USER && user.id === password.userId) {
    const decryptedPassword = decrypt({
      text: password.password,
      iv: password.iv,
    });
    return res.send(decryptedPassword);
  }

  return res.status(403).send("Access denied");
}

module.exports = {
  getAllPasswords,
  getPassword,
  postPassword,
  putPassword,
  viewPassword,
};
