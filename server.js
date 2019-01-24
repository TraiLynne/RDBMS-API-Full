// Imports
const express = require('express');
const helmet = require('helmet');

const port = 4000;
const server = express();

server.use(helmet());
server.use('/', (req, res) => res.send('It\'s working!!'));

// Endpoints


server.listen(port, () => console.log(`Server listening on Port ${port}`));