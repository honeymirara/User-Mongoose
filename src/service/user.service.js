const { createUserDB, getUsersDB } = require('../repository/user.repository');

async function createUser(user) {
    const data = await createUserDB(user);
    if (!data) throw new Error('does not exists');
    return data;
}

async function getUsers(){
    const data = await getUsersDB();
    if(!data) throw new Error('users not found');
    return data;
}

module.exports = { createUser, getUsers };