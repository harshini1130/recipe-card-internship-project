const toggleIngredientsBtn = document.getElementById("toggle-ingredients");
const ingredientsList = document.getElementById("ingredients");
const startBakingBtn = document.getElementById("start-baking");
const stepsList = document.getElementById("steps");

// Toggle Ingredients
toggleIngredientsBtn.addEventListener("click", () => {
  ingredientsList.classList.toggle("hidden");
  toggleIngredientsBtn.textContent = ingredientsList.classList.contains("hidden")
    ? "Show Ingredients"
    : "Hide Ingredients";
});

// Show Steps on Start Baking
startBakingBtn.addEventListener("click", () => {
  stepsList.classList.remove("hidden");
  startBakingBtn.disabled = true;
  startBakingBtn.textContent = "Baking Started!";
});

