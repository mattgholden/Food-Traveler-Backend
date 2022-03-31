const mongoose = require ('../db/connection');

const userSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    confirmPassword: {type: String, required: true},
    //dietaryRestrictions
})

const User = mongoose.model('User', userSchema);
module.exports = User;