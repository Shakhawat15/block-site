const express = require('express');

const router = express.Router();

const UserRole = require('../models/UserRole');

// Get all Data
router.get('/get', async(req, res) => {
    try {
        const userRole = await UserRole.find({});

        if(userRole.length === 0) {
            res.json({err: 'No user role found'})
        } else {
            res.json(userRole);
        }
    } catch (e) {
        res.json({Error: `Error is ${e}`});
    }
});

// Add user role
router.post('/add', async(req, res) => {

    const newUserRole = new UserRole(req.body)

    try {
        const userRole = await newUserRole.save();
        res.json(userRole);
    } catch (e) {
        res.json({Error: `Error is ${e}`});
    }
});

// Get data by id 
router.get('/:id', async(req, res) => {

    try {
        const userRole = await UserRole.findById(req.params.id);

        if(userRole.length === 0) {
            res.json({err: 'No user found with this ID'})
        } else {
            res.json(userRole);
        }
        
    } catch (e) {
        res.json({Error: `Error is ${e}`});
    }
});

module.exports = router;