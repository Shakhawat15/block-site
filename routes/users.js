const express = require('express');

const router = express.Router();

const User = require('../models/User');

// Get all data
router.get('/get', async (req, res) => {
    try {
        const user = await User.find({});

        if(user.length === 0) {
            res.json({err: 'No user found.'});
        }else {
            res.json(user);
        }
    }catch(e) {
        res.json({Error: `Error is ${e}`});
    }
});

// Add data 
router.post('/add', async(req, res) => {

    const newUser = new User(req.body)

    try {
        const user = await newUser.save();
        res.json(user);
    } catch (e) {
        res.json({Error: `Error is ${e}`});
    }
});

// Get data by id 
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        
        if(user.length === 0) {
            res.json({err: 'No user found with this ID'});
        }else {
            res.json(user);
        }
    } catch (e) {
        res.json({Error: `Error is ${e}`});
    }
});

// Delete data by id 
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete({_id: req.params.id});
        res.json({success: 'User deleted successfully'});
    } catch (e) {
        res.json({Error: `Error is ${e}`});
    }
});

// Update data by id 
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate({_id: req.params.id}, req.body);
        res.json({success: 'User updated successfully'});
    } catch (e) {
        res.json({Error: `Error is ${e}`});
    }
});

module.exports = router;
