// src/redux/store.jsx
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchReducer";
import recipeReducer from "./reducers/recipeReducers"
import { thunk } from "redux-thunk"; // Use named import for thunk

const store = configureStore({
  reducer: {
    search: searchReducer,
    recipes: recipeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Use getDefaultMiddleware for other middleware
});

export default store;
