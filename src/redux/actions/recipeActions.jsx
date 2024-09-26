// Action types for managing favorite recipes and searching for recipes
export const ADD_FAVORITE = "ADD_FAVORITE"; // Action type for adding a favorite recipe
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"; // Action type for removing a favorite recipe
export const SEARCH_RECIPE = "SEARCH_RECIPE"; // Action type to initiate a recipe search
export const SEARCH_RECIPE_SUCCESS = "SEARCH_RECIPE_SUCCESS"; // Action type when recipe search is successful
export const SEARCH_RECIPE_ERROR = "SEARCH_RECIPE_ERROR"; // Action type when there is an error in recipe search
export const SEARCH_RECIPE_LOADING = "SEARCH_RECIPE_LOADING"; // Action type for loading state during recipe search

// Action creator for searching for recipes
export const searchRecipe = (query) => {
  const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY; // Get API key from environment variables

  return async (dispatch) => {
    // Return an asynchronous function that takes dispatch as an argument
    dispatch({ type: SEARCH_RECIPE_LOADING }); // Dispatch action to indicate loading state
    try {
      // Fetch data from the Spoonacular API with the provided search query
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=20`
      );

      // Check if the response from the API is OK
      if (!response.ok) {
        console.error("Error:", response.status, response.statusText); // Log error details to the console
        throw new Error(response.statusText); // Throw an error if response is not OK
      }

      const data = await response.json(); // Parse the JSON data from the response
      console.log("Data:", data); // Log the fetched data to the console

      // Dispatch success action with the retrieved recipes
      dispatch({ type: SEARCH_RECIPE_SUCCESS, payload: data.results });
    } catch (error) {
      console.error("Error:", error); // Log error details to the console
      // Dispatch error action with the error message
      dispatch({ type: SEARCH_RECIPE_ERROR, payload: error.message });
    }
  };
};

// Action creator for adding a recipe to the list of favorites
export const addFavorite = (recipe) => ({
  type: ADD_FAVORITE, // Set action type for adding a favorite
  payload: recipe, // Payload containing the recipe to be added
});

// Action creator for removing a recipe from the list of favorites
export const removeFavorite = (recipeId) => ({
  type: REMOVE_FAVORITE, // Set action type for removing a favorite
  payload: recipeId, // Payload containing the ID of the recipe to be removed
});
