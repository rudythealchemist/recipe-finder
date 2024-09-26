// src/redux/reducers/recipeReducer.js
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/recipeActions"; // Import action types

// Initial state of the reducer
const initialState = {
  favoriteRecipes: JSON.parse(localStorage.getItem("favorites")) || [], // Initialize with the stored favorites, or an empty array if none are stored
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      // Add the recipe to the favorites
      const updatedFavorites = [...state.favoriteRecipes, action.payload];
      // Store the updated list in local storage
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      // Return the updated state
      return { ...state, favoriteRecipes: updatedFavorites };

    case REMOVE_FAVORITE:
      // Filter out the recipe to remove
      const filteredFavorites = state.favoriteRecipes.filter(
        (recipe) => recipe.id !== action.payload
      );
      // Store the updated list in local storage
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
      // Return the updated state
      return { ...state, favoriteRecipes: filteredFavorites };
    default:
      return state;
  }
};
export default recipeReducer;
