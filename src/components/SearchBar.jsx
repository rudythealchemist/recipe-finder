// Import necessary components and hooks from React and Material-UI
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  InputAdornment,
  CircularProgress,
  Alert,
  Snackbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { searchRecipe } from "../redux/actions/recipeActions";

// Define the SearchBar component
const SearchBar = () => {
  const { searchResults, error, isLoading } = useSelector(
    (state) => state.search
  );
  const [open, setOpen] = useState(false); // Local state for Snackbar open state
  const [searchQuery, setSearchQuery] = useState(""); // Local state for search query input value
  const [hasSearched, setHasSearched] = useState(false); // State to track if a search has been made
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Define the handleSubmit function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchQuery.trim()) {
      setOpen(true);
    } else {
      setHasSearched(true);
      dispatch(searchRecipe(searchQuery));
      setSearchQuery("");
      if (window.location.pathname === "/favorites") {
        navigate("/");
      }
    }
  };

  // Return the JSX for the SearchBar component
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        sx={{ backgroundColor: "white", borderRadius: "5px" }}
        variant="outlined"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        size="small"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                {isLoading ? (
                  <CircularProgress size={24} />
                ) : (
                  <SearchIcon
                    onClick={handleSubmit}
                    style={{ cursor: "pointer" }} // Add a pointer cursor for better UX
                  />
                )}
              </InputAdornment>
            ),
          },
        }}
      />
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          Please enter a search query
        </Alert>
      </Snackbar>
      <Snackbar
        open={searchResults.length === 0 && !isLoading && hasSearched}
        autoHideDuration={3000}
        onClose={() => setHasSearched(false)}
      >
        <Alert severity="info" sx={{ width: "100%" }}>
          No results found, try something else.
        </Alert>
      </Snackbar>
      <Snackbar
        open={!!error}
        autoHideDuration={3000}
        onClose={() => {}} // Do nothing on close
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SearchBar;
