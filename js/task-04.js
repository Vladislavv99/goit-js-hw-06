let counterValue = 0;
const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

btnMinus.addEventListener("click", () => {
  counterValue -= 1;
  console.log(counterValue);
  valueEl.textContent = counterValue;
});

btnPlus.addEventListener("click", () => {
  counterValue += 1;
  console.log(counterValue);
  valueEl.textContent = counterValue;
});
