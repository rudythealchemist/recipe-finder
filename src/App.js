import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import FavoriteRecipes from "./components/FavoriteRecipes";
import "./App.css";

// This component is the main app component.
// It renders the Header, RecipeList, and FavoriteRecipes components.
// The Header component is used to search for recipes.
// The RecipeList component is used to display the search results.
// The FavoriteRecipes component is used to display the user's favorite recipes.
const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const triggerSearch = (query) => {
    setSearchQuery(query);
    console.log("Searching for:", query); // Handle your search, e.g., update RecipeList
  };
  return (
    <Provider store={store}>
      <Router>
        <Header triggerSearch={triggerSearch} />
        <Routes>
          <Route path="/" element={<RecipeList searchQuery={searchQuery} />} />
          <Route path="/favorites" element={<FavoriteRecipes />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
