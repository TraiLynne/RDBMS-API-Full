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
router.get('/', async (req, res) => {
    try {
        const cohorts = await db.readAll();

        cohorts.length > 0 ?
            res
                .status(200)
                .json(cohorts)
            :
            res
                .status(404)
                .json({
                    errorMessage: 'There were no Cohorts found'
                });
    } catch (err) {
        res
            .status(500)
            .json({
                errorMessage: 'Houston, we have a problem'
            });
    }
});

// Unique
router.get('/:id', async (req, res) => {
    const {
        id
    } = req.params;

    try {
        const cohort = await db.findById(id);

        cohort ?
            res
            .status(200)
            .json(cohort) :
            res
            .status(404)
            .json({
                errorMessage: 'There is no zoo found'
            })
    } catch (err) {
        res
            .status(500)
            .json({
                errorMessage: 'Houston we have a problem'
            });
    }
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