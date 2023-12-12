const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.0:27017/university');

const Users = mongoose.model('users', {
    name: String,
    surname: String,
    email: String,
    password: String
})

const ObjectId = mongoose.Types.ObjectId

module.exports = { Users, ObjectId }