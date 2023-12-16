const { Skills } = require('../db');

async function createSkillsDB(skills) {
    await Skills.create(skills);
    const data = await Skills.find();
    return data;
}

module.exports = { createSkillsDB };