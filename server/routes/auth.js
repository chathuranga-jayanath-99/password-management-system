const express = require('express');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const { User } = require('../models/user');
const { Admin } = require('../models/admin');
const router = express.Router();

router.post('/user', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    const user = await User.findByEmail(req.body.email);
    if (!user) return res.status(400).send("Invalid email or password");

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send("Invalid email or password");

    const token = user.generateAuthToken();
    res.send(token);
}) 

router.post('/admin', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(404).send(error.details[0].message);

    const admin = await Admin.findByEmail(req.body.email);
    if (!admin) return res.status(400).send("Invalid email or password");

    const validPassword = await bcrypt.compare(req.body.password, admin.password);
    if (!validPassword) return res.status(400).send("Invalid email or password");

    const token = admin.generateAuthToken();
    res.send(token);
})

function validate(req) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().required()
    })

    return schema.validate(req);
}

module.exports = router;