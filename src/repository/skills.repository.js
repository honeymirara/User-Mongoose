const { Skills, ObjectId } = require('../db');

async function createSkillsDB(skills) {
    await Skills.create(skills);
    const data = await Skills.find();
    return data;
}

async function getSkillsDB() {
    const data = await Skills.find();
    return data;
}

async function getSkillByIdDB(id) {
    const data = await Skills.findOne({ _id: new ObjectId(id) })
    return data;
}

module.exports = { createSkillsDB, getSkillsDB, getSkillByIdDB};