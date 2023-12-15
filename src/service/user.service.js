const { createUserDB, getUsersDB, getUserByIdDB, updateUserByIdDB, deleteUserByIdDB } = require('../repository/user.repository');

async function createUser(user) {
    const data = await createUserDB(user);
    if (!data) throw new Error('does not exists');
    return data;
}

async function getUsers() {
    const data = await getUsersDB();
    if (!data) throw new Error('users not found');
    return data;
}

async function getUserById() {
    const data = await getUserByIdDB();
    if (!data) throw new Error('does not found');
    return data;
}

async function updateUserById({id}, {users}) {
    const data = await updateUserByIdDB({ id }, { users });
    if (!data) throw new Error('not found data');
    return data;
}

async function deleteUserById(_id) {
    const data = await deleteUserByIdDB(_id)
    if (!data) throw new Error('not fount data');
    return data;
}

module.exports = { createUser, getUsers, getUserById, updateUserById, deleteUserById };