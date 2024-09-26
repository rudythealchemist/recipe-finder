// src/pages/HomePage.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import RecipeCard from "../components/RecipeCard";
import { useSelector } from "react-redux";

const HomePage = () => {
  const searchResults = useSelector((state) => state.search.searchResults);

  return (
    <Box>
      {!searchResults.length ? (
        <Typography variant="h5" align="center" sx={{ margin: 2 }}>
          Please search for a recipe.
        </Typography>
      ) : (
        <Grid container spacing={2} margin={2} >
          {searchResults.map((recipe) => (
            <Grid key={recipe.id} size={{ xs: 12, sm: 6, md: 4,lg:3 }}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default HomePage;

