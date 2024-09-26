// Import necessary components from React and Material-UI
import React, { useState, memo } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import RecipeModal from "./RecipeModal"; // Import the RecipeModal component
import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks for dispatch and state selection
import { addFavorite, removeFavorite } from "../redux/actions/recipeActions"; // Import action creators

// Memoize the RecipeCard component to prevent unnecessary re-renders
const RecipeCard = memo(({ recipe }) => {
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  const favoriteRecipes = useSelector((state) => state.recipes.favoriteRecipes); // Select favorite recipes from the Redux state
  const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility

  // Check if the current recipe is favorited by comparing IDs
  const isFavorite = favoriteRecipes.some(
    (favoriteRecipe) => favoriteRecipe.id === recipe.id
  );

  // Function to handle click on the favorite button
  const handleFavoriteClick = () => {
    if (isFavorite) {
      // If the recipe is already a favorite, remove it
      dispatch(removeFavorite(recipe.id));
    } else {
      // If not a favorite, add it to favorites
      dispatch(addFavorite(recipe));
    }
  };

  // Function to open the recipe details modal
  const handleOpenModalSummary = () => {
    setModalOpen(true); // Set modalOpen state to true to show the modal
  };

  // Function to close the recipe details modal
  const handleCloseModalSummary = () => {
    setModalOpen(false); // Set modalOpen state to false to hide the modal
  };

  return (
    <Grid>
      {/* Container for grid layout */}
      <Box
        sx={{
          maxWidth: 430, // Maximum width of the recipe card
          margin: "auto", // Center the card horizontally
          height: "100%", // Full height of the box
          display: "flex", // Use flexbox layout
          flexDirection: "column", // Vertical stacking of children
        }}
      >
        <Card
          sx={{
            width: "100%", // Full width of the card
            height: "100%", // Full height of the card
            display: "flex", // Use flexbox layout for card content
            flexDirection: "column", // Vertical stacking of card content
          }}
        >
          <CardMedia
            component="img" // Media type for displaying the image
            height="140" // Fixed height for the image
            image={recipe.image} // Recipe image
            alt={recipe.title} // Alt text for the image
          />
          <CardContent
            sx={{
              display: "flex", // Use flexbox layout for card content
              flexDirection: "column", // Stack content vertically
              flexGrow: 1, // Allow the content to grow and fill available space
            }}
          >
            <Typography
              variant="h6" // Typography variant for styling
              component="div" // HTML element for typography
              sx={{
                flexGrow: 1, // Allow the title to grow and take up space
                overflow: "hidden", // Hide overflow text
                textOverflow: "ellipsis", // Show ellipsis for overflow text
                display: "-webkit-box", // Enable multi-line truncation
                WebkitLineClamp: 1, // Number of lines to show for clamping
                WebkitBoxOrient: "vertical", // Specify vertical orientation for box layout
              }}
            >
              {/* Display the recipe title */}
              {recipe.title}
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }} // Flex layout for buttons
            >
              <Button
                color={isFavorite ? "secondary" : "primary"} // Change button color based on favorite status
                onClick={handleFavoriteClick} // Handle favorite button click
              >
                {isFavorite ? "Unfavorite" : "Add Favorite"}
                {/* Button text based on favorite status */}
              </Button>
              <Button onClick={handleOpenModalSummary}>Details</Button>
              {/* Button to open modal for recipe details */}
              <RecipeModal
                open={modalOpen} // Pass modal open state
                handleClose={handleCloseModalSummary} // Pass close handler
                recipe={recipe} // Pass current recipe to modal
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
});

// Export the RecipeCard component for use in other parts of the app
export default RecipeCard;
