const router = require("express").Router();
const savedMealsController = require ("../controllers/savedMealsController")

router.get ("/", savedMealsController.getAll)