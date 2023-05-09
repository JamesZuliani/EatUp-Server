const { v4 } = require("uuid");

const knexConfig = require("../knexfile");
const knex = require("knex");
const db = knex(knexConfig);

module.exports.getAll = (req, res) => {
  db.select("id", "user_id", "title", "ingredients")
    .from("savedMeals")
    .where({ user_id: req.params.userId })
    .then((savedMeals) => {
      if (savedMeals.length === 0) {
        return res.status(404).json({
          message: `Error ${req.params.userId} not found or has no saved meals`,
        });
      }
      return res.status(200).json(savedMeals);
    });
};
