const express = require('express');

const router = express.Router();

router.use(express.json());

// C - Create
router.post('/', (req, res) => {
    res
        .status(201)
        .json({
            url: '/api/students',
            operation: 'POST',
            description: 'save a new student to the database'
        });
});

// R - Read
// All
router.get('/', (req, res) => {
    res
        .status(200)
        .json({
            url: '/api/students',
            operation: 'GET',
            description: 'return an array of all students'
        });
});

// Unique
router.get('/:id', (req, res) => {
    res
        .status(200)
        .json({
            url: '/api/students/:id',
            operation: 'GET',
            description: 'return the student with the matching `id`'
        });
});

// U - Update
router.put('/:id', (req, res) => {
    res
        .status(200)
        .json({
            url: '/api/students/:id',
            operation: 'PUT',
            description: 'update the student with the matching `id` using information sent in the body of the request'
        });
});

// D - Delete
router.delete('/:id', (req, res) => {
    res
        .status(200)
        .json({
            url: '/api/students/:id',
            operation: 'DELETE',
            description: 'delete the specified student'
        });
});

router.use('/', (req, res) => res.send('Welcome to Students API'));

module.exports = router;