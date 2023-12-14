const { Users, Skills } = require('../db');

async function createUserDB(user) {
    await Users.create(user);
    const data = await Users.find();
    return data;
}

async function getUsersDB() {
    const data = await Users.find();
    return data;
}

async function getUserByIdDB() {
    const data = await Users.findOne();
    return data;
}

module.exports = { createUserDB, getUsersDB, getUserByIdDB };