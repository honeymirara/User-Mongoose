const {createSkillsDB} = require('../repository/skills.repository');

async function createSkill(skills) {
    const data = await createSkillsDB(skills);
    if (!data) throw new Error('does not exists');
    return data;
}

module.exports = {createSkill}