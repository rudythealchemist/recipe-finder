import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

const Header = ({ handleSearch }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isFavoritesPage = location.pathname === "/favorites";
  const favoriteRecipes = useSelector((state) => state.recipes.favoriteRecipes);

  return (
    <AppBar position="static" sx={{ backgroundColor: "orange" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton component={Link} to="/" color="inherit">
            <RestaurantIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Recipe Finder
          </Typography>
        </Box>
        <SearchBar handleSearch={handleSearch} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            component={Link}
            to="/"
            color={isHomePage ? "secondary" : "inherit"}
          >
            <HomeIcon />
          </IconButton>
          <IconButton sx={{padding: 0}}
            component={Link}
            to="/favorites"
            color={isFavoritesPage ? "secondary" : "inherit"}
          >
            <FavoriteIcon />
            <Typography
              variant="body2"
              component="span"
              sx={{ position: "relative", top: -12}}
            >
              {favoriteRecipes.length}
            </Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
