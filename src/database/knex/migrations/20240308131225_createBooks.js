
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
/* exports.up = (knex) => {
    return knex.schema.createTable("users", (table) => {
        table.increments("idUser").primary();
        table.string("name").notNullable();
        table.string("email").notNullable();
        table.string("telefone").notNullable();
        table.timestamp("created_at").defaultTo(knex.fn.now());
        table.integer("book_id").unsigned().index().references("idBook").inTable("books")
      })
};


exports.down = (knex) => {
  return knex.schema.dropTableIfExist("users")
}; */