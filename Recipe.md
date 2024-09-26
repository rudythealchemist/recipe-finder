# Code Structure

The codebase is organized into the following directories:

- `src/`: The main source code directory.
- `src/components/`: Contains reusable components that can be used throughout the application.
- `Search/`: The component responsible for the search functionality.

_`RecipeCard/`: The component representing a single recipe.
_`Favorites/`: The component displaying the user's favorite recipes.

- `src/pages/`: Contains the main pages of the application.
- `Home/`: The landing page.
- `SearchResults/`: The page displaying search results.
- `FavoritesPage/`1038990

: The page displaying the user's favorite recipes.
_`src/utils/`: Contains utility functions or helpers that can be used across the application.
_`api.js`: Handles API calls to the back-end.
_`helpers.js`: Contains general utility functions.
_`index.js`: The entry point of the application.

## Relationship Between Components and Folder Structure

Components are organized into folders based on their functionality or relatedness.
This improves codebase manageability and navigation.

### Nested Components

Nested components can be placed within their parent components' folders for better organization.
For example, a `FavoriteButton` subcomponent of `RecipeCard` would reside within the `RecipeCard` folder.

### Shared Components

Shared components used throughout the application are placed in the `components` folder for easy reuse.

### Utility Functions

Utility functions are placed in the `utils` folder to keep core functionalities focused within the main components.

### Benefits

Following a well-structured folder organization enhances code readability, maintainability, and team collaboration.

Here is the reformatted text for better readability:

### Recent Code Edits

You most recently edited the file at `Recipe.md`.

### Selected Code

The lines of code that you most recently selected are:

```
recipeTypes.js
reducers/
recipeReducer.js
store.js
index.js
App.css
```

### Step-by-Step Guide

Here is the step-by-step guide from `Recipe.md`:

#### Step 3: Redux Setup

- Create a Redux store
- Define the initial state of the store
- Create a reducer to handle actions
- Create actions to add and remove recipes

#### Step 4: React Router Setup

- Create a new BrowserRouter
- Define routes for the Home and Recipe pages
- Use the Switch component to render the correct route

#### Step 5: Recipe API Integration

- Create a new API client
- Define functions to fetch recipes and recipe details
- Use the API client to fetch data

#### Step 6: Recipe List Component

- Create a new RecipeList component
- Use the API client to fetch recipes
- Render a list of RecipeCard components
- Handle search input and update the recipe list

#### Step 7: Recipe Card Component

- Create a new RecipeCard component
- Render the recipe title, summary, and image
- Link to the Recipe page

#### Step 8: Favorite Recipes

- Create a new FavoriteRecipes component
- Use the API client to fetch favorite recipes
- Render a list of RecipeCard components

#### Step 9: Local Storage

- Create a new localStorage client
- Define functions to save and get favorite recipes
- Use the localStorage client to store and retrieve data

#### Step 10: Final Touches

- Add the FavoriteRecipes component to the Home page
- Add the saveFavoriteRecipe function to the RecipeCard component
- Add the getFavoriteRecipes function to the FavoriteRecipes component
- Style the application using Material-UI
