const router = require("express").Router();
const recipeController = require ("../controllers/recipeController")

router.get ("/", recipeController.getRecipes)

router.post ("/search", recipeController.getPossibleRecipes)

module.exports = router