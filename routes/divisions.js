const express = require('express');
const router = express.Router();

const Division = require('../models/Division');

// Get all data
router.get('/get', async(req, res) => {
    try {
        const division = await Division.find({});
        
        if(division.length === 0) {
            res.json({err: 'No division found'})
        } else {
            res.json(division);
        }
    } catch (e) {
        res.json({Error: `Error is ${e}`});
    }
});

// Add new division
router.post('/add', async(req, res) => {
    const newDivision = new Division(req.body);

    try {
        const division = await newDivision.save();
        res.json(division);
    } catch (e) {
        res.json({Error: `Error is ${e}`});
    }
})

// Get data by ID
router.get('/:id', async(req, res) => {
    try {
        const division = await Division.findById(req.params.id);
        
        if(division.length === 0) {
            res.json({err: 'No division found with this ID'});
        } else {
            res.json(division);
        }
    } catch (e) {
        res.json({Error: `Error is ${e}`});
    }

});

// Delete data by id
router.delete('/:id', async(req, res) => {
    try {
        const division = await Division.findByIdAndDelete({_id: req.params.id});
        res.json({success: 'Division is deleted successfully'})
    } catch (e) {
        res.json({Error: `Error is ${e}`});
    }
});

// Update data by id
router.put('/:id', async(req, res) => {
    try {
        const division = await Division.findByIdAndUpdate({_id: req.params.id}, req.body);
        res.json({success: 'Division is updated successfully'});
    } catch (e) {
        res.json({Error: `Error is ${e}`});
    }
})

module.exports = router;