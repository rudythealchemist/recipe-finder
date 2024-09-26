// src/components/RecipeSummary.jsx
import React, { useState } from "react"; // Import React and useState hook from React
import RecipeModal from "./RecipeModal"; // Import the RecipeModal component for displaying the recipe details

// Define the RecipeSummary component which takes a recipe as a prop
const RecipeSummary = ({ recipe }) => {
  // Local state to control the visibility of the recipe modal
  const [showModal, setShowModal] = useState(false);

  // Function to handle showing the modal when the button is clicked
  const handleShowModal = () => {
    setShowModal(true); // Set showModal state to true to display the modal
  };

  return (
    <div>
      {" "}
      {/* Main container for the recipe summary */}
      <h2>{recipe.recipe.label}</h2> {/* Display the recipe title */}
      <p>{recipe.recipe.description}</p> {/* Display the recipe description */}
      <button onClick={handleShowModal}>Show Recipe</button>{" "}
      {/* Button to show the recipe modal */}
      {showModal && <RecipeModal recipe={recipe} />}{" "}
      {/* Render the RecipeModal component if showModal is true, passing the recipe data */}
    </div>
  );
};

// Export the RecipeSummary component for use in other parts of the application
export default RecipeSummary;
