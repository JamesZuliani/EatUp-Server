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
    "ingredient_8"
  )
    .from("saved-meals")
    .where({ user_id: req.params.userId })
    .then((savedMeals) => {
      if (savedMeals.length === 0) {
        return res.status(404).json({
          message: `Error ${req.params.userId} not found or has no saved meals`,
        });
      }
      // for in loop, loop through each key, if not null, populate into new object, return new object
      return res.status(200).json(savedMeals);
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
  };

  knex("saved-meals")
    .insert(meal)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.sendStatus(500).json({ error: "Failed to create saved meal" });
    });
};

module.exports.delete = (req, res) => {
  const { mealId } = req.params;

  knex("saved-meals")
    .where({ id: mealId })
    .del()
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      req.status(500).json({ error: "Failed to delete saved meal." });
    });
};
