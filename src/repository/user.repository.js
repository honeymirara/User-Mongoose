const { Users } = require('../db');

async function createUserDB(user) {
    await Users.create(user);
    const data = await Users.find();
    return data;
}

module.exports = { createUserDB };