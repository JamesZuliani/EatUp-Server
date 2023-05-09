require("dotenv").config();
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig);

const express = require("express");
const cors = require("cors");

const app = express();
const { PORT } = process.env;

app.use(cors());
app.use(express.json());

const savedMealsRoute = require("./routes/savedMeals.js");
app.use("/savedMeals", savedMealsRoute);


app.listen(8080, function () {
    console.log("here is the server on port " + PORT);
  });