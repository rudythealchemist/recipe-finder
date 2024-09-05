import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

// Styled InputBase component
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  backgroundColor: "#f5e8cb",
  height: "40px",
  borderRadius: "5px",
  padding: theme.spacing(1),
  width: "400px",
  transition: "width 0.3s",
  "&:hover": {
    width: "450px", // Optional hover effect
  },
  "&:focus": {
    width: "550px",
  },
}));

// Header component with search input and favorite recipes count
const Header = ({ triggerSearch }) => {
  const [searchInput, setSearchInput] = useState(""); // Local state for search input
  const navigate = useNavigate(); // Initialize useNavigate

  // Retrieve favorite recipes from the Redux store
  const { favoriteRecipes } = useSelector((state) => state.recipes);
  const favoritesCount = favoriteRecipes.length;

  // Function to handle navigation to Favorites page
  const handleFavoritesClick = () => {
    navigate("/favorites"); // Navigate to the Favorites page
  };

  // Function to handle navigation to Home page
  const handleHomeClick = () => {
    navigate("/"); // Navigate to the Home page
  };

  // Function to handle search on Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      triggerSearch(searchInput); // Call triggerSearch with the current input value
    }
  };

  // Function to handle search icon click
  const handleSearchClick = () => {
    if (searchInput.trim() !== "") {
      triggerSearch(searchInput); // Only trigger if not empty
    }
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "orange" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Food icon and Recipe Finder header aligned to the left */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuBookIcon /> {/* Food icon */}
          </IconButton>
          <Typography variant="h6" style={{ marginRight: 10 }}>
            Recipe Finder {/* Header title */}
          </Typography>
        </div>

        {/* Search bar in the middle */}
        <StyledInputBase
          placeholder="Search Recipes..."
          inputProps={{ "aria-label": "search" }}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} // Update local state on change
          onKeyDown={handleKeyPress} // Handle Enter key press
          endAdornment={
            <IconButton onClick={handleSearchClick}>
              <SearchIcon /> {/* Search icon */}
            </IconButton>
          }
        />

        {/* Home and Favorite icons aligned to the right */}
        <div>
          <IconButton color="inherit" onClick={handleHomeClick}>
            <HomeIcon /> {/* Home icon */}
          </IconButton>
          <IconButton color="inherit" onClick={handleFavoritesClick}>
            <Badge badgeContent={favoritesCount} color="secondary">
              <BookmarksIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header; // Export the Header component
