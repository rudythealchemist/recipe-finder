import React from "react"; // Import React library
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material"; // Import Material-UI components
import { Link, useLocation } from "react-router-dom"; // Import routing components from React Router
import RestaurantIcon from "@mui/icons-material/Restaurant"; // Import restaurant icon
import HomeIcon from "@mui/icons-material/Home"; // Import home icon
import FavoriteIcon from "@mui/icons-material/Favorite"; // Import favorite icon
import SearchBar from "./SearchBar"; // Import the SearchBar component
import { useSelector } from "react-redux"; // Import useSelector for accessing Redux state

// Define the Header component
const Header = ({ handleSearch }) => {
  const location = useLocation(); // Hook to get the current location object
  const isHomePage = location.pathname === "/"; // Check if the current page is the home page
  const isFavoritesPage = location.pathname === "/favorites"; // Check if the current page is the favorites page
  const favoriteRecipes = useSelector((state) => state.recipes.favoriteRecipes); // Select favorite recipes from the Redux state

  return (
    <AppBar position="static" sx={{ backgroundColor: "orange" }}>
      {" "}
      {/* AppBar component with static positioning and background color */}
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {" "}
        {/* Toolbar for spacing and alignment */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {" "}
          {/* Box to group logo and title */}
          <IconButton component={Link} to="/" color="inherit">
            {" "}
            {/* Icon button to navigate to home */}
            <RestaurantIcon /> {/* Restaurant icon */}
          </IconButton>
          <Typography
            variant="h6" // Typography variant for displaying the title
            component="div" // HTML element to render as a div
            sx={{ lineHeight: { xs: 1, sm: "normal", md: "normal" } }} // Responsive line height
          >
            Recipe Finder {/* Title text for the application */}
          </Typography>
        </Box>
        <SearchBar handleSearch={handleSearch} />{" "}
        {/* Render the SearchBar component */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {" "}
          {/* Box to group navigation icons */}
          <IconButton
            component={Link}
            to="/" // Link to the home page
            color={isHomePage ? "secondary" : "inherit"} // Change the icon color based on the current page
          >
            <HomeIcon /> {/* Home icon */}
          </IconButton>
          <IconButton
            sx={{ padding: 0 }} // Remove padding for the favorite button
            component={Link}
            to="/favorites" // Link to the favorites page
            color={isFavoritesPage ? "secondary" : "inherit"} // Change color based on current page
          >
            <FavoriteIcon /> {/* Favorite icon */}
            <Typography
              variant="body2" // Typography variant for the count text
              component="span" // Render as a span element
              sx={{ position: "relative", top: -12 }} // Adjust position to stack above the icon
            >
              {favoriteRecipes.length}{" "}
              {/* Display the count of favorite recipes */}
            </Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// Export the Header component for use in other parts of the app
export default Header;
