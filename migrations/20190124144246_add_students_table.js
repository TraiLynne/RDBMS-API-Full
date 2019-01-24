
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', tbl => {
        tbl.increments('id');
        tbl
            .integer('cohort_id')
            .notNullable()
            .references('id')
            .inTable('cohorts');
        tbl
            .string('name')
            .notNullable();
        tbl
            .timestamp('createdAt')
            .defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students');
};
