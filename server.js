// Imports
const express = require('express');
const helmet = require('helmet');

const port = 4000;
const mainRouter = require('./routers');
const server = express();

server.use(helmet());

// Endpoints
server.use('/api', mainRouter);

server.use('/', (req, res) => res.send('It\'s working!!'));
server.listen(port, () => console.log(`Server listening on Port ${port}`));