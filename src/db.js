const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/university');

const Users = mongoose.model('users', {
    name: String,
    surname: String,
    email: String,
    password: String
})

const Skills = mongoose.model('skills', {
    title: String
})

const ObjectId = mongoose.Types.ObjectId

module.exports = { Users, Skills, ObjectId }