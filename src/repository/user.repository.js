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

async function updateUserByIdDB({ id }, { users }) {
    await Users.updateOne({ id }, { users });
    const data = await Users.find();
    return data;
}

async function deleteUserByIdDB({ id }) {
    await Users.deleteOne({ id })
    const data = await Users.find();
    return data;
}



module.exports = { createUserDB, getUsersDB, getUserByIdDB, updateUserByIdDB, deleteUserByIdDB };