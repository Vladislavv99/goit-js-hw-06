const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.getElementById("ingredients");

const liElements = ingredients.map((el) => {
  let liEl = document.createElement("li");
  liEl.textContent = el;
  liEl.classList.add("item");
  return liEl;
});
listEl.append(...liElements);
