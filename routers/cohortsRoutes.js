const express = require('express');

const router = express.Router();

router.use(express.json());


router.use('/', (req, res) => res.send('Welcome to Cohorts API'));

module.exports = router;