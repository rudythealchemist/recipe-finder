import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/recipeActions"; // Import action types

// Initial state of the reducer
const initialState = {
  favoriteRecipes: JSON.parse(localStorage.getItem("favorites")) || [], // Initialize with the stored favorites, or an empty array if none are stored
};

// Reducer function
export const recipeReducer = (state = initialState, action) => {
  // Handle different actions
  switch (action.type) {
    case ADD_FAVORITE:
      // Add the recipe to the favorites
      const updatedFavorites = [...state.favoriteRecipes, action.payload];
      // Store the updated list in local storage
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      // Return the updated state
      return { ...state, favoriteRecipes: updatedFavorites };

    case REMOVE_FAVORITE:
      // Remove the recipe from the favorites
      const filteredFavorites = state.favoriteRecipes.filter(
        (recipe) => recipe.id !== action.payload
      );
      // Store the updated list in local storage
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
      // Return the updated state
      return { ...state, favoriteRecipes: filteredFavorites };

    default:
      // Return the current state if the action is not handled
      return state;
  }
};

