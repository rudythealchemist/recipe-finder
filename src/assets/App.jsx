import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage"; // Adjust import as necessary
import FavoritesPage from "../pages/FavoritesPage";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import store from "../redux/store";
import { Provider } from "react-redux";
import Header from "../components/Header";

const App = () => {
  

  return (
    <Provider store={store}>
      <Router>
        <Header position="static" >
          <IconButton component={Link} to="/" aria-label="home">
            <HomeIcon />
          </IconButton>
          <IconButton component={Link} to="/favorites" aria-label="favorites">
            <FavoriteIcon />
          </IconButton>
        </Header>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/favorites" element={<FavoritesPage />} exact />
          {/* handle unknown routes */}
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;