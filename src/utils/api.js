const apiKey = process.env.REACT_APP_API_KEY;

// Example usage in a fetch request
const fetchRecipes = async (query) => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=YOUR_APP_ID&app_key=${apiKey}`
  );
  const data = await response.json();
  // Handle the data...
};

export default fetchRecipes;
