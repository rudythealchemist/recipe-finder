// Action types for managing the list of favorite recipes.
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

// Action creator for adding a recipe to the list of favorites.
export const addFavorite = (recipe) => ({
  type: ADD_FAVORITE,
  payload: recipe,
});

// Action creators for managing the list of favorite recipes.
// Action creator for removing a recipe from the list of favorites.
export const removeFavorite = (recipeId) => ({
  type: REMOVE_FAVORITE,
  payload: recipeId,
});
