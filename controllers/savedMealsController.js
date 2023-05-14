const { v4 } = require("uuid");
const knexConfig = require("../knexfile");
const knex = require("knex");
const db = knex(knexConfig);
const axios = require("axios");

module.exports.getAll = (req, res) => {
  return db
    .select(
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
    .where({ user_id: req.body.userId })
    .then((savedMeals) => {
      console.log(savedMeals);
      if (savedMeals.length === 0) {
        return res.status(404).json({
          message: `Error ${req.body.userId} not found or has no saved meals`,
        });
      }
      // for in loop, loop through each key, if not null, populate into new object, return new object
      return res.status(200).json(savedMeals);
    });
};

module.exports.getIngredient = (req, res) => {
  const { food } = req.body;
  return axios
    .get(
      `https://api.edamam.com/api/nutrition-data?app_id=94e7927a&app_key=27dfd22c7fe1e61e26d3b0cce3028176&ingr=${food}`
    )
    .then(({ data }) => {
      return res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      return res
        .status(500)
        .json({ message: "error occureed while retrieving" });
    });
};

module.exports.putMeal = (req, res) => {
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
  console.log("before db");
  console.log(meal);
  return db("saved-meals")
    .insert(meal)
    .then(() => {
      console.log("success");
      return res.status(201).json({ meal });
    })
    .catch((err) => {
      console.log("fail", err);
      return res.status(500).json({ error: "Failed to create saved meal" });
    });
};

module.exports.delete = (req, res) => {
  const { mealId } = req.params;
  return db("saved-meals")
    .del()
    .where({ id: mealId })
    .then(() => {
      return res.status(204);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ error: "Failed to delete saved meal." });
    });
};
