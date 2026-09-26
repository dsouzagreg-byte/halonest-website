const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  const button = form.querySelector("button");
  button.textContent = "Sending request";
  button.disabled = true;
});
