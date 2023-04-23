const inputEl = document.querySelector("#validation-input");
console.log(inputEl.value.length);
inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
