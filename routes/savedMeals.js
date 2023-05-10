const router = require("express").Router();
const savedMealsController = require ("../controllers/savedMealsController")

router.get ("/:userId", savedMealsController.getAll)

router.post ("/", savedMealsController.post)

router.delete ("/:mealId", savedMealsController.delete)

module.exports = router