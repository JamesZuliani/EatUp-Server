/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const userData = [
  {
    id: 1,
    name: "Joe",
  },
  {
    id: 2,
    name: "Jill",
  },
  {
    id: 3,
    name: "James",
  },
];

const savedData = [
  {
    id: 1,
    title: "chicken noodle soup",
    ingredient_1: "1 cup chicken broth",
    ingredient_2:"2 oz rotisserie chicken",
    ingredient_3:"2 oz egg noodles",
    user_id: 1,
  },
  {
    id: 2,
    title: "ceaser salad",
    ingredient_1: "2 oz romanie lettuce",
    ingredient_2:"50 grams salad croutons",
    ingredient_3:"100 ml caesar salad dressing",
    user_id: 2,
  },
  {
    id: 3,
    title: "classic breakfast",
    ingredient_1:"2 fried eggs",
    ingredient_2: "1 oz cooked bacon",
    user_id: 3,
  },
];

const loggedData = [
  {
    id: 1,
    title: "grilled cheese",
    ingredient_1: "2 pieces whole-wheat bread", 
    ingredient_2:"2 oz cheddar cheese",
    date: "01/01/2023",
    meal_type: "lunch",
    user_id: 1,
  },
  {
    id: 2,
    title: "smoked salmon",
    ingredient_1: "2 oz smoked salmon",
    date: "02/02/2023",
    meal_type: "breakfast",
    user_id: 2,
  },
];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("saved-meals").del();
  await knex("logged-meals").del();
  await knex("user").insert(userData);
  await knex("saved-meals").insert(savedData);
  await knex("logged-meals").insert(loggedData);
};
