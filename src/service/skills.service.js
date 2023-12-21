const { createSkillsDB, getSkillsDB, getSkillByIdDB, updateSkillDB } = require('../repository/skills.repository');

async function createSkill(skills) {
    const data = await createSkillsDB(skills);
    if (!data) throw new Error('does not exists');
    return data;
}

async function getSkills() {
    const data = await getSkillsDB();
    if (!data) throw new Error('data is not found');
    return data;
}

async function getSkillById(id) {
    const data = await getSkillByIdDB(id);
    if (!data) throw new Error('data is not found');
    return data;
}

async function updateSkill(id, skills) {
    const data = await updateSkillDB(id, skills)
    if (!data) throw new Error('data is not found');
    return data;
}

module.exports = { createSkill, getSkills, getSkillById, updateSkill }