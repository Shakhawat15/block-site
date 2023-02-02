const mongoose = require('mongoose');

// create user role
const userRoleSchema = new mongoose.Schema({
    name: {
        require: true,
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

const userRole = mongoose.model('user_roles', userRoleSchema);
module.exports = userRole;