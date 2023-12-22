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

async function updateSkillDB(_id, skills) {
    const data = await Skills.findByIdAndUpdate({ _id: new ObjectId(_id) }, { $set: skills }, { new: true })
    return data;
}

async function deleteSkillDB(id){
    const data = await Skills.findByIdAndDelete({ _id: new ObjectId(id) })
    return data;
}

module.exports = { createSkillsDB, getSkillsDB, getSkillByIdDB, updateSkillDB, deleteSkillDB };