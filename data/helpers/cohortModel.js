const knex = require('knex');

const dbConfig = require('../../knexfile');
const db = knex(dbConfig.development);

// C - Create 
const create = newRecord => db('cohorts').insert(newRecord);

// R - Read
// All
const readAll = () => db('cohorts');

// Unique
const findById = id => db('cohorts').where({
    id
}).first();

// Unique Students
const getCohortStudents = id => db('students').where({
    cohort_id: id
});

// U - Update
const update = (id, record) => db('cohorts').where({
    id
}).update(record);

// D - Destroy
const destroy = id => db('cohorts').where({
    id
}).del();

module.exports = {
    create,
    readAll,
    findById,
    getCohortStudents,
    update,
    destroy
}