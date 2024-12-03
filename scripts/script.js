// Light / Dark Mode
const toggleTheme = document.getElementById("dark-mode-toggle");
const htmlElement = document.documentElement;

toggleTheme.addEventListener("click", () => {
  const currentTheme = htmlElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  htmlElement.setAttribute("data-theme", newTheme);
});
