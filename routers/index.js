const express = require('express');

// Router Imports
const cohortRouter = require('./cohortsRoutes');
const studentRouter = require('./studentRoutes');

// Router Decleration
const router = express.Router();

// Sub-Routers
router.use('/cohorts', cohortRouter);
router.use('/students', studentRouter);


router.use('/', (req, res) => {
    res.send('Welcome to the Main API');
});

// Export
module.exports = router;