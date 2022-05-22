const bcrypt = require('bcrypt');
const _ = require('lodash');
const { Image, validate } = require('../models/image');

async function getAllImages (req, res, next) {
    const allImages = await Image.findAll();
    res.send(allImages);
}

async function getImage (req, res, next) {
    const image = await Image.findById(req.params.id);
    if (!image) return res.status(404).send("The image with given ID not found.");

    res.send(image);
}

async function postImage (req, res, next) {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await Image.findById(req.body.userId);
    if (!user) return res.status(400).send("The user not found");

    const image = new Image(_.pick(req.body, ['userId','title','encryptedImage']));
    
    // encrypt the image provided

    await image.save();
    // do we have to save salt as well to view password??? check on that..
}

// without userId and encryptedImage
async function putImage (req, res, next) {
    const { error } = validate(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    const image = await Image.findByIdAndUpdate(req.params.id, {
        title: req.body.title
    });

    if (!image) return res.status(404).send("The customer with given ID not found.");

    res.send(image);
}

module.exports = {
    getAllImages,
    getImage,
    postImage,
    putImage
}
