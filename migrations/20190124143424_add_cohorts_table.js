exports.up = function(knex, Promise) {
    return knex.schema.createTable('cohorts', tbl => {
        tbl.increments();
        tbl
            .string('name')
            .notNullable()
            .unique('uq_cohort_name');
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return knex.schma.dropTableIfExists('cohorts');
};
