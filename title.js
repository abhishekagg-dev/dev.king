const themeBtn = document.getElementById("themeButton");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

const lightThemeImg = "images/sun.png";
const darkThemeImg = "images/dark theme.png";

const currentSavedTheme = localStorage.getItem("site-theme") || "light";

body.setAttribute("data-theme", currentSavedTheme);
if (currentSavedTheme === "light") {
  themeIcon.src = darkThemeImg;
} else {
  themeIcon.src = lightThemeImg;
}

themeBtn.addEventListener("click", () => {
  const isCurrentLight = body.getAttribute("data-theme") === "light";

  themeIcon.style.transform = "rotate(0deg)";

  setTimeout(() => {
    themeIcon.style.transform = "rotate(360deg)";
  }, 800);

  if (isCurrentLight) {
    body.setAttribute("data-theme", "dark");
    themeIcon.src = lightThemeImg;
    localStorage.setItem("site-theme", "dark");
  } else {
    body.setAttribute("data-theme", "light");
    themeIcon.src = darkThemeImg;
    localStorage.setItem("site-theme", "light");
  }
});
