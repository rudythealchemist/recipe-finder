export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const SEARCH_RECIPE = "SEARCH_RECIPE";
export const SEARCH_RECIPE_SUCCESS = "SEARCH_RECIPE_SUCCESS"; // Add this line
export const SEARCH_RECIPE_ERROR = "SEARCH_RECIPE_ERROR";
export const SEARCH_RECIPE_LOADING = "SEARCH_RECIPE_LOADING";

// Action creator for searching for recipes.
export const searchRecipe = (query) => {
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

  return async (dispatch) => {
    dispatch({ type: SEARCH_RECIPE_LOADING }); // Add this line
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=9`
      );
      if (!response.ok) {
        console.error("Error:", response.status, response.statusText);
        throw new Error(response.statusText);
      }
      const data = await response.json();
      console.log("Data:", data);
      dispatch({ type: "SEARCH_RECIPE_SUCCESS", payload: data.results });
    } catch (error) {
      console.error("Error:", error);
      dispatch({ type: "SEARCH_RECIPE_ERROR", payload: error.message });
    }
  };
};
// Action creator for adding a recipe to the list of favorites.
export const addFavorite = (recipe) => ({
  type: ADD_FAVORITE,
  payload: recipe,
});

// Action creator for removing a recipe from the list of favorites.
export const removeFavorite = (recipeId) => ({
  type: REMOVE_FAVORITE,
  payload: recipeId,
});
