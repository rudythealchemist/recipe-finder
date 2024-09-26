// Import necessary components from React and Material-UI
import React, { useState, memo } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import RecipeModal from "./RecipeModal";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions/recipeActions";

// Memoize the RecipeCard component to prevent unnecessary re-renders
const RecipeCard = memo(({ recipe }) => {
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector((state) => state.recipes.favoriteRecipes);
  const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility

  // Check if the recipe is a favorite
  const isFavorite = favoriteRecipes.some(
    (favoriteRecipe) => favoriteRecipe.id === recipe.id
  );

  // Handle favorite button click
  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(recipe.id));
    } else {
      dispatch(addFavorite(recipe));
    }
  };

  // Handle modal open and close
  const handleOpenModalSummary = () => setModalOpen(true);
  const handleCloseModalSummary = () => setModalOpen(false);

  return (
    <Box sx={{  margin: "auto", height: "100%" }}>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={recipe.image}
          alt={recipe.title}
        />
        <CardContent
          sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 1, // Number of lines to show
              WebkitBoxOrient: "vertical",
            }}
          >
            {recipe.title}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              color={isFavorite ? "secondary" : "primary"}
              onClick={handleFavoriteClick}
            >
              {isFavorite ? "Unfavorite" : "Add Favorite"}
            </Button>
            <Button onClick={handleOpenModalSummary}>Details</Button>
            <RecipeModal
              open={modalOpen}
              handleClose={handleCloseModalSummary}
              recipe={recipe}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
});

export default RecipeCard;
