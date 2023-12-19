const express = require('express');
const bodyParser = require('body-parser');
const route = require('./controller/user.controller');
const skills = require('./controller/skills.controller');

const app = express()

app.use(bodyParser.json())
app.use('/user', route)
app.use('/skills', skills)


app.use((err, req, res, next) => {
    res.status(500).send(err.message);
})

module.exports = app

