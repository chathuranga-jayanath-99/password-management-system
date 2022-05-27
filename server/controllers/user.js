const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User, validate} = require('../models/user');

async function getAllUsers (req, res, next) {
    const allUsers = await User.fetchAll();
    res.send(allUsers);
}

async function getUser (req, res, next) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("The user with given ID not found");

    res.send(user);
}

async function postUser (req, res, next) {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findByEmail(req.body.email);
    if (user) return res.status(400).send('User email already registered');

    user = new User(_.pick(req.body, ['name','email','password','gender']));
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(user, ['id','name','email','gender']));
}

async function putUser (req, res, next) {
    const { error } = validate(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    const user = await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name
    });

    if (!user) return res.status(404).send("The customer with given ID not found.");

    res.send(user);
}

async function getMe (req, res, next) {
    const user = await User.findById(req.user.id);
    res.send(user);
}

async function putMe (req, res, next) {
    const { error } = validate(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    const user = await User.findByIdAndUpdate(req.user.id, {
        name: req.body.name,
        gender: req.body.gener
    });

    if (!user) return res.status(404).send("The customer with given ID not found.");

    res.send(user);
}

module.exports.getAllUsers = getAllUsers;
module.exports.getUser = getUser;
module.exports.postUser = postUser;
module.exports.putUser = putUser;
module.exports.getMe = getMe;
module.exports.putMe = putMe;