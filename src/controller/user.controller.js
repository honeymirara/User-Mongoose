const express = require('express');
const { buildResponse } = require('../helper/buildResponse');
const { createUser } = require('../service/user.service');

const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const data = await createUser(req.body)
        buildResponse(res, 200, data)
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})


module.exports = route 