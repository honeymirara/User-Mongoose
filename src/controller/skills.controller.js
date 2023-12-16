const express = require('express');
const {buildResponse} = require('../helper/buildResponse');
const {createSkill} = require('../service/skills.service');

const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const data = await createSkill(req.body)
        buildResponse(res, 200, data)
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})