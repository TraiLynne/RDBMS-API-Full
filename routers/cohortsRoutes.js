const express = require('express');
const db = require('../data/helpers/cohortModel');
const router = express.Router();

router.use(express.json());

// C - Create
router.post('/', async (req, res) => {
    const newRecord = req.body;

    try {
        if (!newRecord.name || newRecord.name === '') {
            res
                .status(400)
                .json({
                    errorMessage: 'Please provide a name for the new record'
                });
        } else {
            let newId = await db.create(newRecord);

            newId ?
                res
                .status(201)
                    .json({ ...newRecord, id: newId[0] }) :
                res
                .status(500)
                .json({
                    errorMessage: 'Houston we have a problem'
                });

        }
    } catch (err) {
        res
            .status(500)
            .json({
                errorMessage: 'Houston we have a problem'
            });
    }
});


// R - Read
// All
router.get('/', (req, res) => {
    res
        .status(200)
        .json({
            url: '/api/cohorts',
            operation: 'GET',
            description: 'return an array of all cohorts'
        });
});

// Unique
router.get('/:id', (req, res) => {
    res
        .status(200)
        .json({
            url: '/api/cohorts/:id',
            operation: 'GET',
            description: 'return the cohort with the matching `id`'
        });
});

// Unique Students
router.get('/:id/students', (req, res) => {
    res
        .status(200)
        .json({
            url: '/api/cohorts/:id/students',
            operation: 'GET',
            description: 'returns all students for the cohort with the specified `id`'
        });
});

// U - Update
router.put('/:id', (req, res) => {
    res
        .status(200)
        .json({
            url: '/api/cohorts/:id',
            operation: 'PUT',
            description: 'update the cohort with the matching `id` using information sent in the body of the request'
        });
});

// D - Delete
router.delete('/:id', (req, res) => {
    res
        .status(200)
        .json({
            url: '/api/cohorts/:id',
            operation: 'DELETE',
            description: 'delete the specified cohorts'
        });
});

router.use('/', (req, res) => res.send('Welcome to Cohorts API'));

module.exports = router;