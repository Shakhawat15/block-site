const mongoose = require('mongoose');

// create user data 
const userSchema = new mongoose.Schema({
    firstname: {
        required: true,
        type: String
    },
    lastname: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        require: true,
        type: String
    },
    office_id: {
        require: true,
        type: Number,
        unique: true
    },
    phone: {
        require: true,
        type: Number,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('users', userSchema);

module.exports = User;