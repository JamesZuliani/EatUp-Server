const { v4 } = require("uuid");
const knexConfig = require("../knexfile");
const knex = require("knex");
const db = knex(knexConfig);

module.exports.getAll = (req, res) => {
  db.select(
    "id",
    "user_id",
    "title",
    "ingredient_1",
    "ingredient_2",
    "ingredient_3",
    "ingredient_4",
    "ingredient_5",
    "ingredient_6",
    "ingredient_7",
    "ingredient_8",
    "date",
    "meal_type"
  )
    .from("logged-meals")
    .where({ user_id: req.params.userId })
    .then((loggedMeals) => {
      if (loggedMeals.length === 0) {
        return res.status(404).json({
          message: `Error ${req.params.userId} not found or has no logged meals`,
        });
      }
      // for in loop, loop through each key, if not null, populate into new object, return new object
      return res.status(200).json(loggedMeals);
    });
};
module.exports.post = (req, res) => {
  const {
    user_id,
    title,
    ingredient_1,
    ingredient_2,
    ingredient_3,
    ingredient_4,
    ingredient_5,
    ingredient_6,
    ingredient_7,
    ingredient_8,
    date,
    meal_type,
  } = req.body;

  const newId = v4();

  const meal = {
    id: newId,
    user_id,
    title,
    ingredient_1,
    ingredient_2: ingredient_2 || null,
    ingredient_3: ingredient_3 || null,
    ingredient_4: ingredient_4 || null,
    ingredient_5: ingredient_5 || null,
    ingredient_6: ingredient_6 || null,
    ingredient_7: ingredient_7 || null,
    ingredient_8: ingredient_8 || null,
    date,
    meal_type,
  };

  knex("logged-meals")
    .insert(meal)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(500).json({ error: "Failed to create logged meal" });
    });
};

module.exports.put = (req, res) => {
  const { mealId } = req.params;
  const {
    user_id,
    title,
    ingredient_1,
    ingredient_2,
    ingredient_3,
    ingredient_4,
    ingredient_5,
    ingredient_6,
    ingredient_7,
    ingredient_8,
    date,
    meal_type,
  } = req.body;

  const mealUpdates = {
    user_id,
    title,
    ingredient_1,
    ingredient_2: ingredient_2 || null,
    ingredient_3: ingredient_3 || null,
    ingredient_4: ingredient_4 || null,
    ingredient_5: ingredient_5 || null,
    ingredient_6: ingredient_6 || null,
    ingredient_7: ingredient_7 || null,
    ingredient_8: ingredient_8 || null,
    date,
    meal_type,
  };

  knex("logged-meals")
    .where({ id: mealId })
    .update(mealUpdates)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      res.sendStatus(500).json({ error: "Failed to edit logged meal" });
    });
};
