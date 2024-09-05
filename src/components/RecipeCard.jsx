import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions/recipeActions";
import axios from "axios";
import RecipeModal from "./Modal"; // Import the modal component

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.recipes.favoriteRecipes);
  const isFavorite = favorites.find((fav) => fav.id === recipe.id);
  const [summary, setSummary] = useState("");
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false); // State for modal open/closed

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(recipe.id));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  // API key imported from .env file
  const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

  // Fetch recipe summary from API
  const fetchRecipeSummary = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${recipe.id}/summary?apiKey=${apiKey}`
      );
      setSummary(response.data.summary);
      setError("");
      setModalOpen(true); // Open modal on successful fetch
    } catch (err) {
      setError("Failed to fetch recipe summary. Please try again.");
      console.error("Error fetching recipe summary:", err);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <Card
      sx={{
        margin: 2,
        height: "300px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        alt={recipe.title}
        height="140"
        sx={{ objectFit: "cover" }}
        src={recipe.image}
        image={recipe.image}
      />
      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          {recipe.title}
        </Typography>
        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}
        <Box
          sx={{
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginBottom: "0",
          }}
        >
          <Button
            onClick={handleToggleFavorite}
            color={isFavorite ? "error" : "primary"}
            sx={{ padding: 0 }}
          >
            {isFavorite ? "Remove Favorite" : "Add to Favorites"}
          </Button>
          <Button
            onClick={fetchRecipeSummary}
            color="secondary"
            sx={{ padding: 0 }}
          >
            Recipe Summary
          </Button>
        </Box>
      </CardContent>
      {/* Render the modal and pass relevant props */}
      <RecipeModal
        open={modalOpen}
        handleClose={handleCloseModal}
        title={recipe.title}
        summary={summary}
      />
    </Card>
  );
};

export default RecipeCard; // Export the RecipeCard component
