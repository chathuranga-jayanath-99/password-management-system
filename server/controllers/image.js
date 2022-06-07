const ROLE = require("../roles.json");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { Image, validate } = require("../models/image");
const { User } = require("../models/user");
const { encrypt, decrypt } = require("../util/encryptionHandler");

async function getAllImages(req, res, next) {
  const user = req.user;
  let allImages = NaN;

  if (user.role === ROLE.USER) {
    allImages = await Image.findAllByUser(user.id);
  } else if (user.role === ROLE.ADMIN) {
    allImages = await Image.findAll(user.id);
  }
  res.send(allImages);
}

async function getImage(req, res, next) {
  const user = req.user;

  const image = await Image.findById(req.params.id);
  if (!image)
    return res.status(404).send("The image with given ID not found");

  if (user.role === ROLE.USER && user.id === image.userId)
    return res.send(image);

  return res.status(403).send("Access denied");

  res.send(image);
}

async function postImage(req, res, next) {
  const file = req.file.buffer.toString("base64");

  const data = {
    userId: req.body.userId,
    title: req.body.name,
    image: file,
  };

  req.body = data;

  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findById(req.body.userId);
  if (!user) return res.status(400).send("The user not found");

  const imageObj = new Image({
    userId: req.body.userId,
    title: req.body.title,
    image: req.body.image,
  });
  // imageObj.iv = "test";
  const encryptedImage = encrypt(imageObj.image);
  imageObj.image = encryptedImage.text;
  imageObj.iv = encryptedImage.iv;

  console.log("image encrypted");
  await imageObj.save();

  res.send(imageObj.title);
}

// without userId and encryptedImage
async function putImage(req, res, next) {
  const { error } = validate(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  const image = await Image.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
  });

  if (!image)
    return res.status(404).send("The customer with given ID not found.");

  res.send(image);
}

async function viewImage(req, res, next) {
  // console.log("viewImage");
  // console.log("user", req.user);
  const user = req.user;

  const imageObj = await Image.findById(req.params.id);
  console.log("imageObj", imageObj);
  console.log("encrypted_image", imageObj.encrypted_image);
  
  if (user.role === ROLE.USER && user.id === imageObj.user_id) {
    const decryptedImage = decrypt({
      text: imageObj.encrypted_image,
      iv: imageObj.iv,
    });
    delete imageObj.encrypted_image;
    imageObj.image = decryptedImage;

    return res.send(imageObj);
  }

  return res.status(403).send("Access denied");
}

async function deleteImage(req, res, next) {
  const user = req.user;

  const imageObj = await Image.findById(req.params.id);
  if (!imageObj) return res.status(404).send("The customer with given ID not found.");

  if (user.role === ROLE.USER && user.id === imageObj.user_id) {
    await Image.deleteById(req.params.id);

    return res.send("successfully deleted");
  }

  return res.status(403).send("Access denied");
  
}
module.exports = {
  getAllImages,
  getImage,
  postImage,
  putImage,
  viewImage,
  deleteImage
};
