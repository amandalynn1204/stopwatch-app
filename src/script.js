function changeTheme(event) {
  let body = document.querySelector("body");
  if (event.target.value === "dark") {
    body.classList.remove("light");
  }
  if (event.target.value === "light") {
    body.classList.add("light");
  }
}

let themeSelector = document.querySelector("#theme");
themeSelector.addEventListener("change", changeTheme);
