import React from "react"; // Import React library
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Import routing components from React Router
import HomePage from "../pages/HomePage"; // Import the HomePage component
import FavoritesPage from "../pages/FavoritesPage"; // Import the FavoritesPage component
import { IconButton } from "@mui/material"; // Import IconButton component from Material-UI
import HomeIcon from "@mui/icons-material/Home"; // Import home icon
import FavoriteIcon from "@mui/icons-material/Favorite"; // Import favorite icon
import store from "../redux/store"; // Import the Redux store
import { Provider } from "react-redux"; // Import Provider for Redux
import Header from "../components/Header"; // Import the Header component

// Define the main App component
const App = () => {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap the application in the Redux Provider to provide the store to the app */}
      <Router>
        {" "}
        {/* Set up routing using BrowserRouter */}
        <Header position="static">
          {" "}
          {/* Render the Header component with static positioning */}
          {/* Links for navigation using IconButtons */}
          <IconButton component={Link} to="/" aria-label="home">
            {" "}
            {/* Navigate to home page */}
            <HomeIcon /> {/* Home icon */}
          </IconButton>
          <IconButton component={Link} to="/favorites" aria-label="favorites">
            {" "}
            {/* Navigate to favorites page */}
            <FavoriteIcon /> {/* Favorite icon */}
          </IconButton>
        </Header>
        <Routes>
          {" "}
          {/* Route to home page */}
          <Route path="/" element={<HomePage />} exact />{" "}
          {/* Route to favorites page */}
          <Route path="/favorites" element={<FavoritesPage />} exact />{" "}
          {/* Handle unknown routes and display a message */}
          <Route path="*" element={<p>Page not found</p>} />{" "}
        </Routes>
      </Router>
    </Provider>
  );
};

// Export the App component for use in other parts of the app
export default App;
