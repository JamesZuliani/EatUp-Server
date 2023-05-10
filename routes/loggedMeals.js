const router = require("express").Router();
const loggedMealsController = require ("../controllers/loggedMealsController")

router.get ("/:userId", loggedMealsController.getAll)

router.post ("/", loggedMealsController.post)

router.put ("/:mealId", loggedMealsController.put)

module.exports = router