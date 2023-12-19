const { Skills, ObjectId } = require('../db');

async function createSkillsDB(skills) {
    await Skills.create(skills);
    const data = await Skills.find();
    return data;
}

async function getSkillsDB(){
    const data = await Skills.find();
    return data;
}

module.exports = { createSkillsDB, getSkillsDB };