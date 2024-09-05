import React, { useEffect, useState } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import { Grid2 as Grid } from "@mui/material";

// This component displays a list of RecipeCards based on the search query
const RecipeList = ({ searchQuery }) => {
  const [recipes, setRecipes] = useState([]);

  // Use the spoonacular API key to fetch the recipes
  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  useEffect(() => {
    const fetchRecipes = async () => {
      // Only fetch recipes if there is a search query
      if (searchQuery) {
        const { data } = await axios.get(
          // Use the complexSearch endpoint to search for recipes
          `https://api.spoonacular.com/recipes/complexSearch?query=${searchQuery}&apiKey=${apiKey}`
        );
        // Set the recipes state to the results of the API call
        setRecipes(data.results);
      }
    };
    // Call the fetchRecipes function when the component mounts
    fetchRecipes();
  }, [apiKey, searchQuery]);

  return (
    <Grid container spacing={2} flex>
      {recipes.map((recipe) => (
        <Grid item="true" xs={12} sm={6} md={4} key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeList;
