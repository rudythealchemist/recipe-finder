import React from "react";
import { useSelector } from "react-redux";
import { Grid2 as Grid, Box, Typography, Snackbar, Alert } from "@mui/material";
import RecipeCard from "./RecipeCard";
import { CircularProgress } from "@mui/material";


const SearchResults = () => {
  const { searchResults, searchQuery, isLoading } = useSelector(
    (state) => state.search
  );

  // Render loading state
  if (isLoading) {
    return (
      <Box sx={{ width: "100%", padding: 2, textAlign: "center" }}>
        <CircularProgress color="warning" />
        <Typography variant="h6" gutterBottom sx={{ color: "orange" }}>
          Loading...
        </Typography>
      </Box>
    );
  }

  // Render search results
  return (
    <Box sx={{ padding: 5 }}>
      {searchResults.length === 0 && (
        <Snackbar
          open={true}
          autoHideDuration={3000}
          onClose={() => console.log("Notification closed")}
        >
          <Alert severity="info">No results found for "{searchQuery}".</Alert>
        </Snackbar>
      )}
      <Grid container direction="row" justifycontent="center" spacing={2} >
        {searchResults.map((recipe) => (
          <Grid  xs={12} sm={6} md={4} lg={3}  key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchResults;
