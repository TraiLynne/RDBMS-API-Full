const knex = require('knex');

const dbConfig = require('../../knexfile');
const db = knex(dbConfig.development);

// C - Create 
const create = zoo => db('cohorts').insert(zoo);

// R - Read
// All
const readAll = () => db('cohorts');

// Unique
const findById = id => db('cohorts').where({
    id
}).first();


// U - Update
const update = (id, zoo) => db('cohorts').where({
    id
}).update(zoo);

// D - Destroy
const destroy = id => db('cohorts').where({
    id
}).del();

module.exports = {
    create,
    readAll,
    findById,
    update,
    destroy
}