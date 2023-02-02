const express = require('express');
const router = express.Router();
const District = require('../models/District');

// Get all district
router.get('/get', async(req, res) => {
    try {
        const distict = await District.find({});
        if(distict.length === 0) {
            res.json({err: 'No district found'});
        } else {
            res.json(distict)
        }
    } catch (e) {
        res.json({Error: `Error is ${e}`});
    }
});

// Add new district 
router.post('/add', async(req, res) => {
    const newDistict = new District(req.body);

    try {
        const distict = await newDistict.save();
        res.json(distict);
    } catch (e) {
        res.json({Error: `Error is ${e}`});
    }
});

// Get data by id
router.get('/:id', async(req, res) => {
    try {
        const distict = await District.findById(req.params.id);

        if(distict.length === 0) {
            res.json({err: 'No district found with this id'});
        } else {
            res.json(distict);
        }
    } catch (e) {
        res.json({Error: `Error is ${e}`});
    }
});

// Delete data by id
router.delete('/:id', async(req, res) => {
    try {
        const distict = await District.findByIdAndDelete({_id: req.params.id});
        res.json({success: 'District is deleted successfully'});
    } catch (e) {
        res.json({Error: `Error is ${e}`});
    }
});

// Update data by id
router.put('/:id', async(req, res) => {
    try {
        const distict = await District.findByIdAndUpdate({_id: req.params.id}, req.body);
        res.json({success: 'District is updated successfully'});
    } catch (e) {
        res.json({Error: `Error is ${e}`});
    }
})

module.exports = router;
