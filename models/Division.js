const mongoose = require('mongoose');

// Create division data
const divisionSchema = new mongoose.Schema({
    division_name: {
        require: true,
        type: String,
        unique: true
    },
    district_count: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

const Division = mongoose.model('divisions', divisionSchema);

module.exports = Division;