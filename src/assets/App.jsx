import React from "react"; // Importing React library
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; // Importing React Router components for routing
import HomePage from "../pages/HomePage"; // Importing HomePage component
import FavoritesPage from "../pages/FavoritesPage"; // Importing FavoritesPage component
import { IconButton } from "@mui/material"; // Importing IconButton from Material-UI for buttons with icons
import HomeIcon from "@mui/icons-material/Home"; // Importing Home icon from Material-UI icons
import FavoriteIcon from "@mui/icons-material/Favorite"; // Importing Favorite icon from Material-UI icons
import store from "../redux/store"; // Importing Redux store for state management
import { Provider } from "react-redux"; // Importing Provider component to make the Redux store accessible to the application
import Header from "../components/Header"; // Importing Header component

// Functional component for the main application
const App = () => {
  return (
    // Providing the Redux store to the application
    <Provider store={store}>
      <Router>
        {/* Wrapping the application in Router to enable routing */}
        <Header position="static">
          {" "}
          {/* Header component with static positioning */}
          {/* IconButton for navigation to Home page */}
          <IconButton component={Link} to="/" aria-label="home">
            <HomeIcon /> {/* Rendering Home icon */}
          </IconButton>
          {/* IconButton for navigation to Favorites page */}
          <IconButton component={Link} to="/favorites" aria-label="favorites">
            <FavoriteIcon /> {/* Rendering Favorite icon */}
          </IconButton>
        </Header>
        <Routes>
          {/* Defining the routing structure */}
          {/* Route for the Home page */}
          <Route path="/" element={<HomePage />} exact />
          {/* Route for the Favorites page */}
          <Route path="/favorites" element={<FavoritesPage />} exact />
          {/* Fallback route for handling unknown paths */}
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </Router>
    </Provider>
  );
};

// Exporting the App component as the default export
export default App;
