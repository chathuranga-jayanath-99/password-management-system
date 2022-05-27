const bcrypt = require('bcrypt');
const _ = require('lodash');
const { Admin, validate } = require('../models/admin');

async function getAllAdmins (req, res, next) {
    const allAdmins = await Admin.findAll();
    res.send(allAdmins);
}

async function getAdmin (req, res, next) {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).send("The admin with given ID not found.");

    res.send(admin);
}

async function postAdmin (req, res, next) {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let admin = await Admin.findByEmail(req.body.email);
    if (admin) return res.status(400).send('Admin email already registered');

    admin = new Admin(_.pick(req.body, ['name','email','password']));
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(admin.password, salt);
    await admin.save();

    const token = admin.generateAuthToken();
    res.header('x-auth-token', token).send(_.pick(admin, ['id','name','email']));
}

async function putAdmin (req, res, next) {
    const { error } = validate(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    const admin = await Admin.findByIdAndUpdate(req.params.id, {
        name: req.body.name
    });

    if (!admin) return res.status(404).send("The admin with given ID not found.");

    res.send(admin);
}

async function getMe (req, res, next) {
    const admin = await Admin.findById(req.user.id);
    res.send(admin);
}

async function putMe (req, res, next) {
    const { error } = validate(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    const admin = await Admin.findByIdAndUpdate(req.user.id, {
        name: req.body.name
    });

    if (!admin) return res.status(404).send("The admin with given ID not found.");

    res.send(admin);
}

module.exports.getAllAdmins = getAllAdmins;
module.exports.getAdmin = getAdmin;
module.exports.postAdmin = postAdmin;
module.exports.putAdmin = putAdmin;
module.exports.getMe = getMe;
module.exports.putMe = putMe;