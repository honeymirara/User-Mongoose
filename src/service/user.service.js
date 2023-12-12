const { createUserDB } = require('../repository/user.repository');

async function createUser(user) {
    const data = await createUserDB(user);
    if (!data) throw new Error('does not exists');
    return data;
}

module.exports = { createUser };