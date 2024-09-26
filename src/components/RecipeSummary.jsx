// src/components/RecipeSummary.jsx
import React, { useState } from "react";
import RecipeModal from "./RecipeModal";

const RecipeSummary = ({ recipe }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div>
      <h2>{recipe.recipe.label}</h2>
      <p>{recipe.recipe.description}</p>
      <button onClick={handleShowModal}>Show Recipe</button>
      {showModal && <RecipeModal recipe={recipe} />}
    </div>
  );
};

export default RecipeSummary;
