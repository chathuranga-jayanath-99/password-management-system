const users = require('./routes/users');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.json())
// app.use(express.json());
app.use('/password-management-system/api/users', users);

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on port ${port}...`));