// configureStore creates a Redux store instance
// The reducer parameter is an object with a single key-value pair
// The key is the name of the state slice
// The value is the reducer function that manages that state slice
import { configureStore } from "@reduxjs/toolkit";
import { recipeReducer } from "./reducers/recipeReducer";

const store = configureStore({
  // The reducer parameter is an object with a single key-value pair
  // The key is the name of the state slice
  // The value is the reducer function that manages that state slice
  reducer: {
    // The recipes state slice is managed by the recipeReducer
    recipes: recipeReducer,
  },
});

// Export the store instance as the default export
export default store;

