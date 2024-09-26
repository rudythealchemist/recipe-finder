import axios from "axios";
// import { apiKey } from "../config";
const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

// fetch recipes from spoonacular api
const fetchRecipes = async (query) => {
  // Validate the query
  if (!query) {
    throw new Error("Query is required to fetch recipes");
  }
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch`,
      {
        params: {
          apiKey: apiKey,
          query: query, // Use query as a parameter
        },
      }
    );
    const recipes = response.data.results; // Adjust based on actual data structure
    console.log(recipes);

    return recipes; // Return the results directly
  } catch (error) {
    console.error("Error fetching recipes:", error.message); // Log the error message
    throw error; // Rethrow the error for handling in calling code
  }
};

// fetch recipe summary from spoonacular api
const fetchRecipeSummary = async ({ recipe }) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${recipe.id}/summary`,
      {
        params: {
          apiKey: apiKey,
        },
      }
    );
    //extract title and summary from response
    const { title, summary } = response.data;

    return { title, summary };
  } catch (error) {
    console.error("Error fetching recipe summary:", error.message);
    throw error;
  }
};

export { fetchRecipes, fetchRecipeSummary };
