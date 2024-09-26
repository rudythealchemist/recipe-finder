// src/redux/actions/recipeActions.jsx

// Define action types as constants for managing favorite recipes and searching
export const ADD_FAVORITE = "ADD_FAVORITE"; // Action type for adding a recipe to favorites
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"; // Action type for removing a recipe from favorites
export const SEARCH_RECIPE = "SEARCH_RECIPE"; // Action type for initiating a recipe search
export const SEARCH_RECIPE_SUCCESS = "SEARCH_RECIPE_SUCCESS"; // Action type for successfully fetching search results
export const SEARCH_RECIPE_ERROR = "SEARCH_RECIPE_ERROR"; // Action type for handling errors during search
export const SEARCH_RECIPE_LOADING = "SEARCH_RECIPE_LOADING"; // Action type for indicating loading state during a search
export const SEARCH_INPUT_EMPTY = "SEARCH_INPUT_EMPTY"; // Action type for handling an empty search input
export const SEARCH_RESULTS_EMPTY = "SEARCH_RESULTS_EMPTY"; // Action type for handling situations with no search results

// Define the initial state for the reducer
const initialState = {
  isLoading: false, // Indicates whether a search is currently in progress
  error: null, // Holds error messages if any issues occur during the search
  notification: null, // Notification message related to search actions
  searchResults: [], // Array to hold the results of a search
  searchQuery: "", // Current search query string
  isEmpty: false, // Indicates if there are no results from a search
  isInputEmpty: false, // Indicates if the search input field is empty
};

// Action creators for handling search state
export const searchInputEmpty = () => ({ type: SEARCH_INPUT_EMPTY }); // Action creator for notifying that the search input is empty
export const searchResultsEmpty = () => ({ type: SEARCH_RESULTS_EMPTY }); // Action creator for notifying that there are no search results

// The searchReducer function to manage the search-related state
const searchReducer = (state = initialState, action) => {
  // Switch statement to handle different action types
  switch (action.type) {
    case SEARCH_RECIPE_LOADING: // When a recipe search begins
      return { ...state, isLoading: true }; // Set loading state to true

    case SEARCH_RECIPE_SUCCESS: // When search results are successfully fetched
      return {
        ...state,
        isLoading: false, // Update loading state when results are received
        searchResults: action.payload, // Store the fetched results in the state
        isEmpty: action.payload.length === 0, // Check if results array is empty
      };

    case SEARCH_RECIPE_ERROR: // When an error occurs during the search
      return { ...state, isLoading: false, error: action.payload }; // Update state with error message

    case SEARCH_INPUT_EMPTY: // When the search input is determined to be empty
      return {
        ...state,
        isInputEmpty: true, // Set input empty state to true
        notification: {
          message: "Please enter a search query", // Set notification message for user
          severity: "error", // Severity level of the notification
        },
      };

    case SEARCH_RESULTS_EMPTY: // When no results are found from the search
      return {
        ...state,
        isEmpty: true, // Set results empty state to true
        notification: {
          message: "No search results found, try again", // Notification message for no results
          severity: "info", // Severity level of the notification
        },
      };

    default: // Default case to return current state if no action matches
      return state;
  }
};

// Export the searchReducer as default for use in the Redux store
export default searchReducer;
