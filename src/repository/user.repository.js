const { Users, ObjectId } = require('../db');

async function createUserDB(users) {
    await Users.create(users);
    const data = await Users.find();
    return data;
}

async function getUsersDB() {
    const data = await Users.find();
    return data;
}

async function getUserByIdDB(id) {
    const data = await Users.findOne({ _id: new ObjectId(id) });
    return data;
}


async function updateUserByIdDB(_id, users) {
    const data = await Users.findOneAndUpdate({ _id: new ObjectId(_id) }, { $set: users }, { new: true });
    return data;
}


async function deleteUserByIdDB({ id }) {
    const data = await Users.findOneAndDelete({ id })
    return data;
}



module.exports = { createUserDB, getUsersDB, getUserByIdDB, updateUserByIdDB, deleteUserByIdDB };