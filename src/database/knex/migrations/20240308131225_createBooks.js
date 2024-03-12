
exports.up = (knex) => {
    return knex.schema.createTable("books", (table) => {
        table.increments("idBook").primary();
        table.string("author").notNullable();
        table.string("title").notNullable();
        table.string("description").notNullable();
        table.integer("numberOfPages").notNullable();
        table.boolean("isAvaible").defaultTo("true")
    });
}

exports.down = (knex) => {
  return knex.schema.dropTableIfExist("books")
};
