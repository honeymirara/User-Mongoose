const express = require('express');
const { buildResponse } = require('../helper/buildResponse');
const { createSkill, getSkills, getSkillById, updateSkill } = require('../service/skills.service');

const skills = express.Router();

skills.post('/', async (req, res) => {
    try {
        const data = await createSkill(req.body)
        buildResponse(res, 200, data)
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

skills.get('/', async (req, res) => {
    try {
        const data = await getSkills()
        buildResponse(res, 200, data)
    } catch (err) {
        buildResponse(res, 404, err.mesasge)
    }
}
)

skills.get('/:id', async (req, res) => {
    try {
        const data = await getSkillById(req.params.id)
        buildResponse(res, 200, data)
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

skills.put('/:_id', async (req, res) => {
    try {
        const data = await updateSkill(req.params._id, req.body)
        buildResponse(res, 200, data)
    } catch (err) {
        buildResponse(res, 404, err.mesasge)
    }
})

module.exports = skills