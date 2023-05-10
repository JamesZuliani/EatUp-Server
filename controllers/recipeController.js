const axios = require("axios");

const API_KEY = "7024b9d16a1fe5e821d5517f83b30140";
const API_ID = "eaf14d0f";

module.exports.getRecipes = async (req, res) => {
  try {
    const randomize = Math.floor(Math.random() * 100);
    const response = await axios.get(
      `https://api.edamam.com/search?q=random&app_id=${API_ID}&app_key=${API_KEY}&from=${randomize}&to=${
        randomize + 6
      }`
    );
    const recipes = response.data.hits.map((hit) => ({
      title: hit.recipe.label,
      image: hit.recipe.image,
      ingredients: hit.recipe.ingredients,
      url: hit.recipe.url,
    }));
    res.json(recipes);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

module.exports.getPossibleRecipes = async (req, res) => {
  const { ingredients } = req.body;
  const ingredientStr = ingredients.join(",");

  try {
    const response = await axios.get(
        `https://api.edamam.com/search?q=${ingredientStr}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=6`
    );
    const recipes = response.data.hits.map((hit) => ({
      title: hit.recipe.label,
      image: hit.recipe.image,
      ingredients: hit.recipe.ingredients,
      url: hit.recipe.url,
    }));
    res.json(recipes);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};
