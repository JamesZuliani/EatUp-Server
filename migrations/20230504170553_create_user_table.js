/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("user", function (table) {
      table.increments("id");
      table.string("name").notNullable();
      table.string("username").notNullable();
      table.string("password").notNullable();
    })
    .createTable("saved-meals", function (table) {
      table.increments("id");
      table.integer("user_id").unsigned().notNullable();
      table.string("title").notNullable();
      table.string("ingredient_1").notNullable();
      table.string("ingredient_2");
      table.string("ingredient_3");
      table.string("ingredient_4");
      table.string("ingredient_5");
      table.string("ingredient_6");
      table.string("ingredient_7");
      table.string("ingredient_8");
      table
        .foreign("user_id")
        .references("id")
        .inTable("user")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("logged-meals", function (table) {
      table.increments("id");
      table.integer("user_id").unsigned().notNullable();
      table.string("title").notNullable();
      table.string("ingredient_1").notNullable();
      table.string("ingredient_2");
      table.string("ingredient_3");
      table.string("ingredient_4");
      table.string("ingredient_5");
      table.string("ingredient_6");
      table.string("ingredient_7");
      table.string("ingredient_8");
      table.string("date").notNullable();
      table.string("meal_type").notNullable();
      table
        .foreign("user_id")
        .references("id")
        .inTable("user")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("saved-meals")
    .dropTable("logged-meals")
    .dropTable("user");
};
