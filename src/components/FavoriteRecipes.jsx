import React from "react";
import { useSelector } from "react-redux";
import RecipeCard from "./RecipeCard";
import { Grid } from "@mui/material";

/**
 * Component that displays a list of favorite recipes.
 */
const FavoriteRecipes = () => {
  // Get the list of favorite recipes from the Redux store
  const favoriteRecipes = useSelector((state) => state.recipes.favoriteRecipes);

  return (
    // Use a Grid component to display the favorite recipes in a responsive layout
    <Grid container spacing={1}>
      {/* // If there are no favorite recipes, display a message */}
      {favoriteRecipes.length === 0 ? (
        <p>No favorites found!</p>
      ) : (
        // Otherwise, map over the favorite recipes and render a RecipeCard component for each one
        favoriteRecipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default FavoriteRecipes;
