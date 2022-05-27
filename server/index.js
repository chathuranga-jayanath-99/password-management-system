require('dotenv').config();
const config = require('config');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const admins = require('./routes/admins');
const passwords = require('./routes/passwords');
const images = require('./routes/images');
const auth = require('./routes/auth');
const express = require('express');
const app = express();

if (!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: jwtPrivateKey is not defined.');
    process.exit(1);
}

app.use(express.json());
app.use('/password-management-system/api/users', users);
app.use('/password-management-system/api/admins', admins);
app.use('/password-management-system/api/passwords', passwords);
app.use('/password-management-system/api/images', images);
app.use('/password-management-system/api/auth', auth);
// app.use('/password-management-system/api/admins', admins);

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));