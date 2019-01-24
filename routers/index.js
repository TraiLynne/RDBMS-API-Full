const express = require('express');

// Router Imports

// Router Decleration
const router = express.Router();

// Sub-Routers



router.use('/', (req, res) => {
    res.send('Welcome to the Main API');
});

// Export
module.exports = router;