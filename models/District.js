const mongoose = require('mongoose');

// Create district data schema
const districtSchema = new mongoose.Schema({
    district_name: {
        require: true,
        type: String,
        unique: true
    },
    place_count: {
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

const District = mongoose.model('districts', districtSchema);
module.exports = District;