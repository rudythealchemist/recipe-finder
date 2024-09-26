// src/redux/actions/recipeActions.jsx
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const SEARCH_RECIPE = "SEARCH_RECIPE";
export const SEARCH_RECIPE_SUCCESS = "SEARCH_RECIPE_SUCCESS";
export const SEARCH_RECIPE_ERROR = "SEARCH_RECIPE_ERROR";
export const SEARCH_RECIPE_LOADING = "SEARCH_RECIPE_LOADING";
export const SEARCH_INPUT_EMPTY = "SEARCH_INPUT_EMPTY";
export const SEARCH_RESULTS_EMPTY = "SEARCH_RESULTS_EMPTY";

// Initial state of the reducer
const initialState = {
  isLoading: false,
  error: null,
  notification: null, // Fix typo: notifcation -> notification
  searchResults: [],
  searchQuery: "",
  isEmpty: false,
  isInputEmpty: false,
};

// Action creators
export const searchInputEmpty = () => ({ type: SEARCH_INPUT_EMPTY });
export const searchResultsEmpty = () => ({ type: SEARCH_RESULTS_EMPTY });

// Combine searchReducer and recipeReducer into a single reducer
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_RECIPE_LOADING:
      return { ...state, isLoading: true };
    case SEARCH_RECIPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchResults: action.payload,
        isEmpty: action.payload.length === 0,
      };
    case SEARCH_RECIPE_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case SEARCH_INPUT_EMPTY:
      return {
        ...state,
        isInputEmpty: true,
        notification: {
          message: "Please enter a search query",
          severity: "error",
        },
      };
    case SEARCH_RESULTS_EMPTY:
      return {
        ...state,
        isEmpty: true,
        notification: {
          message: "No search results found, try again",
          severity: "info",
        },
      };
    default:
      return state;
  }
};

export default searchReducer;
