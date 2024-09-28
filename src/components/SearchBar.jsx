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
  // Extract search results, errors, and loading state from the Redux store
  const { searchResults, error, isLoading } = useSelector(
    (state) => state.search
  );

  // Local state for Snackbar open state to show error messages
  const [open, setOpen] = useState(false);

  // Local state for the search query input value
  const [searchQuery, setSearchQuery] = useState("");

  // State to track if a search has been made
  const [hasSearched, setHasSearched] = useState(false);

  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  // Hook to programmatically navigate between routes
  const navigate = useNavigate();

  // Define the handleSubmit function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit behavior

    // Check if the search query is empty
    if (!searchQuery.trim()) {
      setOpen(true); // Open Snackbar to show an error message
    } else {
      setHasSearched(true); // Update state to indicate a search has been initiated
      dispatch(searchRecipe(searchQuery)); // Dispatch the searchRecipe action with the query
      setSearchQuery(""); // Clear the search input after submitting

      // If navigating from the favorites page, redirect to the home page
      if (window.location.pathname === "/favorites") {
        navigate("/");
      }
    }
  };

  // Return the JSX for the SearchBar component
  return (
    <Box
      component="form"
      className="search-bar"
      onSubmit={handleSubmit} // Handle form submission
    >
      <TextField
        sx={{
          width: "100%", // Full width of the input
          backgroundColor: "white", // Background color of the input
          borderRadius: "5px", // Rounded corners for the input
        }}
        autoFocus={true} // Automatically focus on the input
        variant="outlined" // Style variant of the input
        placeholder="Search..." // Placeholder text in the input
        value={searchQuery} // Controlled value of the input
        onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
        size="small" // Size of the input
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                {" "}
                {/* Position the adornment at the end of the input */}
                {isLoading ? ( // Conditional rendering based on loading state
                  <CircularProgress size={24} /> // Show loader when searching
                ) : (
                  <SearchIcon
                    onClick={handleSubmit} // Use onClick to submit the search
                    style={{ cursor: "pointer" }} // Change cursor to pointer for better UX
                  />
                )}
              </InputAdornment>
            ),
          },
        }}
      />
      <Snackbar
        open={open} // Controlled open state for Snackbar
        autoHideDuration={3000} // Auto-hide duration for Snackbar
        onClose={() => setOpen(false)} // Close handler
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          Please enter a search query
        </Alert>
      </Snackbar>

      <Snackbar
        open={searchResults.length === 0 && !isLoading && hasSearched} // Show if no results found after searching
        autoHideDuration={3000} // Auto-hide duration for Snackbar
        onClose={() => setHasSearched(false)} // Reset search state on close
      >
        <Alert severity="info" sx={{ width: "100%" }}>
          No results found, try something else.
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!error} // Show if there is an error in the search
        autoHideDuration={3000} // Auto-hide duration for Snackbar
        onClose={() => {}} // Do nothing on close
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {/* Display the error message from the Redux state */}
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

// Export the SearchBar component for use in other parts of the app
export default SearchBar;
