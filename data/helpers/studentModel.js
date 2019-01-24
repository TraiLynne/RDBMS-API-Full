const knex = require('knex');

const dbConfig = require('../../knexfile');
const db = knex(dbConfig.development);

// C - Create 
const create = zoo => db('students').insert(zoo);

// R - Read
// All
const readAll = () => db('students');

// Unique
const findById = id => db('students').where({
    id
}).first();


// U - Update
const update = (id, zoo) => db('students').where({
    id
}).update(zoo);

// D - Destroy
const destroy = id => db('students').where({
    id
}).del();

module.exports = {
    create,
    readAll,
    findById,
    update,
    destroy
}