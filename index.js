require("dotenv").config();
const PORT = process.env.PORT || 5050;

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const savedMealsRoute = require("./routes/savedMeals");
app.use("/saved-meals", savedMealsRoute);

const loggedMealsRoute = require("./routes/loggedMeals");
app.use("/logged-meals", loggedMealsRoute);

const recipeRoute = require("./routes/recipe");
app.use("/recipes", recipeRoute);

const authRoute = require("./routes/auth");
app.use("/auth", authRoute);

app.listen(PORT, function () {
  console.log("here is the server on port " + PORT);
});
