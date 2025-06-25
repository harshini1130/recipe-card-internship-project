const toggleIngredientsBtn = document.getElementById("toggle-ingredients");
const ingredientsList = document.getElementById("ingredients");
const startBakingBtn = document.getElementById("start-baking");
const stepsList = document.getElementById("steps");

// this is to taggle the ingredients with a button
toggleIngredientsBtn.addEventListener("click", () => {
  ingredientsList.classList.toggle("hidden");
  toggleIngredientsBtn.textContent = ingredientsList.classList.contains("hidden")
    ? "Show Ingredients"
    : "Hide Ingredients";
});

// this will show the steps for start baking button..
startBakingBtn.addEventListener("click", () => {
  stepsList.classList.remove("hidden");
  startBakingBtn.disabled = true;
  startBakingBtn.textContent = "Baking Started!";
});

