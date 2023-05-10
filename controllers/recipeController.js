const knexConfig = require("../knexfile");
const knex = require("knex");
const axios = require ('axios')
const db = knex(knexConfig);

const API_KEY = "";
const API_ID = "";

 module.exports.getRecipes = async (req, res) => {
    try {
        const response = await axios.get(`https://api.edamam.com/search?q=random&app_id=${API_ID}&app_key=${API_KEY}&from=0to=10`);
        const recipes = response.data.hits.map(hit => ({
            title:hit.recipe.label,
            image: hit.recipe.image,
            ingredients: hit.recipe.ingredients,
            url: hit.recipe.url,
        }));
        res.json(recipes);
    } catch (error) {
        res.status(500).send('Server Error')
    }
}