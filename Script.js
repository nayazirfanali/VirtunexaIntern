// Sample recipe data (can be fetched from an API or database)
const recipes = [
  {
    name: 'Vegan Salad',
    category: 'vegetarian',
    image: 'https://via.placeholder.com/250x150.png?text=Vegan+Salad',
    description: 'A fresh and healthy salad with a variety of vegetables.'
  },
  {
    name: 'Gluten-Free Pancakes',
    category: 'gluten-free',
    image: 'https://via.placeholder.com/250x150.png?text=Gluten-Free+Pancakes',
    description: 'Fluffy and delicious pancakes made without gluten.'
  },
  {
    name: 'Chicken Soup',
    category: 'non-vegetarian',
    image: 'https://via.placeholder.com/250x150.png?text=Chicken+Soup',
    description: 'A hearty chicken soup with vegetables and spices.'
  }
];

// Function to display recipes
function displayRecipes(filteredRecipes) {
  const recipeContainer = document.getElementById('recipes');
  recipeContainer.innerHTML = ''; // Clear existing recipes

  filteredRecipes.forEach(recipe => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <h3>${recipe.name}</h3>
      <p>${recipe.description}</p>
    `;
    
    recipeContainer.appendChild(recipeCard);
  });
}

// Search and category filter logic
function filterRecipes() {
  const searchQuery = document.getElementById('search-bar').value.toLowerCase();
  const category = document.getElementById('category').value;

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery);
    const matchesCategory = category === 'all' || recipe.category === category;
    return matchesSearch && matchesCategory;
  });

  displayRecipes(filteredRecipes);
}

// Event listeners for filtering
document.getElementById('search-bar').addEventListener('input', filterRecipes);
document.getElementById('category').addEventListener('change', filterRecipes);

// Initial display
displayRecipes(recipes);
