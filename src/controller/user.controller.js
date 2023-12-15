const express = require('express');
const { buildResponse } = require('../helper/buildResponse');
const { createUser, getUsers, getUserById, updateUserById, deleteUserById} = require('../service/user.service');

const route = express.Router();

route.post('/', async (req, res) => {
    try {
        const data = await createUser(req.body)
        buildResponse(res, 200, data)
    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

route.get('/', async (req, res) => {
    try {
        const data = await getUsers()
        buildResponse(res, 200, data)
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
})

route.get('/:id', async (req, res) => {
    try {
        const data = await getUserById(req.params.id, req.body)
        buildResponse(res, 200, data);

    } catch (err) {
        buildResponse(res, 404, err.message)
    }
})

route.put('/:id', async (req, res) => {
    try {
        const data = await updateUserById(req.params.id, req.body);
        buildResponse(res, 200, data)
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
})

route.delete('/:_id', async (req, res) => {
    try {
        const data = await deleteUserById(req.params._id);
        buildResponse(res, 200, data)
    } catch (err) {
        buildResponse(res, 404, err.message);
    }
})


module.exports = route 