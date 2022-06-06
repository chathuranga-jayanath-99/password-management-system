const bcrypt = require("bcrypt");
const _ = require("lodash");
const { Image, validate } = require("../models/image");
const { User } = require("../models/user");
const { encrypt } = require("../util/encryptionHandler");

async function getAllImages(req, res, next) {
  const allImages = await Image.findAll();
  res.send(allImages);
}

async function getImage(req, res, next) {
  const image = await Image.findById(req.params.id);
  if (!image) return res.status(404).send("The image with given ID not found.");

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
  const user = req.user;

  const imageObj = await Image.findById(req.params.id);

  if (user.role === ROLE.USER && user.id === image.userId) {
    const decryptedImage = decrypt({
      image: imageObj.encryptedImage,
      iv: imageObj.iv,
    });

    imageObj.image = decryptedImage;

    return res.send(imageObj);
  }

  return res.status(403).send("Access denied");
}

module.exports = {
  getAllImages,
  getImage,
  postImage,
  putImage,
  viewImage,
};
