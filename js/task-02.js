const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.getElementById("ingredients");

ingredients.map((el) => {
  let liEl = document.createElement("li");
  liEl.textContent = el;
  liEl.classList.add("item");
  listEl.append(liEl);
});
