exports.up = function (knex) {
    return knex.schema.createTable('version', (table) => {
        table.increments('id').primary();
        table.string('version');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('version');
};
