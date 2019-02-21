const knex = require('knex');

const dbConfig = require('../../knexfile');
const db = knex(dbConfig.development);

// C - Create 
const create = newRecord => db('students').insert(newRecord);

// R - Read
// All
const readAll = () => db('students');

// Unique
const findById = id => db('students').where({
    id
}).first();


// U - Update
const update = (id, record) => db('students').where({
    id
}).update(record);

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