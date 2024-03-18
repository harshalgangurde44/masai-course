// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://127.0.0.1:${
  import.meta && import.meta.env && import.meta.env.REACT_APP_JSON_SERVER_PORT
    ? import.meta.env.REACT_APP_JSON_SERVER_PORT
    : 9090
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //

const urlAllRecipes = `${baseServerURL}/recipes`;
const dataListWrapper = document.getElementById("data-list-wrapper");
let currentPage = 1;
const recipesPerPage = 5;

// Function to fetch recipes and append them to the DOM
async function fetchRecipes() {
  const response = await fetch(
    `${urlAllRecipes}?_page=${currentPage}&_limit=${recipesPerPage}`
  );
  const recipes = await response.json();

  // Update total results count
  const totalResults = document.querySelector(".total-results");
  totalResults.textContent =
    parseInt(totalResults.textContent) + recipes.length;

  // Append recipes to the DOM
  recipes.forEach((recipe) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");
    recipeCard.innerHTML = `
      <div>
        <img src="${recipe.image}" alt="Recipe Image">
      </div>
      <div class="recipe-details">
        <h2 class="recipe-name">${recipe.name}</h2>
        <p class="recipe-price">${recipe.price}</p>
      </div>
    `;
    dataListWrapper.appendChild(recipeCard);
  });

  // Increment current page for the next fetch
  currentPage++;
}

// Function to check if the user has scrolled to the bottom of the page
function isAtBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// Event listener for fetching recipes and infinite scrolling
document
  .getElementById("fetch-recipes")
  .addEventListener("click", fetchRecipes);

// Event listener for infinite scrolling
window.addEventListener("scroll", () => {
  if (isAtBottom()) {
    fetchRecipes();
  }
});
