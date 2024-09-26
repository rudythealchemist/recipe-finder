// src/pages/HomePage.jsx
import React from "react";
import { Box } from "@mui/material";
import SearchResults from "../components/SearchResults";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const HomePage = () => {
  const searchResults = useSelector((state) => state.search.searchResults);

  return (
    <Box align="center" justifycontent="center">
      {!searchResults.length ? (
        <Typography
          variant="h5"
          component="p"
          gutterBottom
          align="center"
          sx={{ margin: 2 }}
        >
          Please search for a recipe.
        </Typography>
      ) : (
        <SearchResults />
      )}
    </Box>
  );
};

export default HomePage;
