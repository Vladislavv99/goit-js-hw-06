// ! ===================== 1 ========================

const numberOfCategories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${numberOfCategories.length}`);

// ! ===================== 1 ========================
console.log("\n");
// ! ===================== 2 ========================

numberOfCategories.forEach((categorie) => {
  const titleEl = categorie.querySelector("h2").textContent;
  const numOfLi = categorie.querySelectorAll("li").length;
  console.log(`Category: ${titleEl}`);
  console.log(`Elements: ${numOfLi}`);
  console.log("\n");
});

// ! ===================== 2 ========================
