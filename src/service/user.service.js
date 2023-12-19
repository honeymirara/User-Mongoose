const { createUserDB, getUsersDB, getUserByIdDB, updateUserByIdDB, deleteUserByIdDB, createSkillsDB} = require('../repository/user.repository');

async function createUser(users) {
    const data = await createUserDB(users);
    if (!data) throw new Error('does not exists');
    return data;
}

async function getUsers() {
    const data = await getUsersDB();
    if (!data) throw new Error('users not found');
    return data;
}

async function getUserById(id) {
    const data = await getUserByIdDB(id);
    if (!data) throw new Error('does not found');
    return data;
}

async function updateUserById(_id, users) {
    const data = await updateUserByIdDB(_id, users);
    if (!data) throw new Error('not found data');
    return data;
}

async function deleteUserById(_id) {
    const data = await deleteUserByIdDB(_id)
    if (!data) throw new Error('not fount data');
    return data;
}


module.exports = { createUser, getUsers, getUserById, updateUserById, deleteUserById};