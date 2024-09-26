// src/redux/store.jsx

import { configureStore } from "@reduxjs/toolkit"; // Import configureStore from Redux Toolkit for store configuration
import searchReducer from "./reducers/searchReducer"; // Import the search reducer for managing search state
import recipeReducer from "./reducers/recipeReducers"; // Import the recipe reducer for managing recipe state
import { thunk } from "redux-thunk"; // Import thunk middleware for handling asynchronous actions

// Create the Redux store with configureStore
const store = configureStore({
  reducer: {
    search: searchReducer, // Add search reducer to the store under the 'search' key
    recipes: recipeReducer, // Add recipe reducer to the store under the 'recipes' key
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Include default middleware and add thunk for handling async logic
});

// Export the configured store as the default export for use in the application
export default store;
