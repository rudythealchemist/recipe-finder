import React from "react"; // Importing React library
import { Routes, Route, Link, BrowserRouter } from "react-router-dom"; // Ensure correct imports
import HomePage from "../pages/HomePage"; // Importing HomePage component
import FavoritesPage from "../pages/FavoritesPage"; // Importing FavoritesPage component
import { IconButton } from "@mui/material"; // Importing IconButton from Material-UI for buttons with icons
import HomeIcon from "@mui/icons-material/Home"; // Importing Home icon from Material-UI icons
import FavoriteIcon from "@mui/icons-material/Favorite"; // Importing Favorite icon from Material-UI icons
import Header from "../components/Header"; // Importing Header component

// Functional component for the main application
const App = () => {
  return (
    <BrowserRouter>
      {/* Header component with static positioning */}
      <Header position="static">
        {/* IconButton for navigation to Home page */}
        <IconButton component={Link} to="/" aria-label="home">
          <HomeIcon />
        </IconButton>
        {/* IconButton for navigation to Favorites page */}
        <IconButton component={Link} to="/favorites" aria-label="favorites">
          <FavoriteIcon />
        </IconButton>
      </Header>
      <Routes>
        {/* Defining the routing structure */}
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        {/* Fallback route for handling unknown paths */}
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

// Exporting the App component as the default export
export default App;
