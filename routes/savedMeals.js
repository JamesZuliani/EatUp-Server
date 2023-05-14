const router = require("express").Router();
const savedMealsController = require ("../controllers/savedMealsController")

router.post ("/", savedMealsController.getAll)

router.post("/ingredient", savedMealsController.getIngredient)

router.put ("/", savedMealsController.putMeal)

router.delete ("/:mealId", savedMealsController.delete)

module.exports = router