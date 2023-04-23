const inputEl = document.querySelector("#validation-input");
console.log(inputEl.value.length);
inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === 6) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
  const test = event.currentTarget.value.length;
  console.log(test);
});
