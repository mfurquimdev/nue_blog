// ../../../../.bun/install/global/node_modules/mine.css/dist/theme-switcher.js
var colorSchemeMql = window.matchMedia("(prefers-color-scheme: dark)");
colorSchemeMql.addListener(setTheme);
function setTheme(e) {
  const isDarkMode = e.matches;
  const colorScheme = window.sessionStorage.getItem("color-scheme");
  const body = document.documentElement;
  switch (colorScheme) {
    case "dark": {
      if (isDarkMode)
        window.sessionStorage.setItem("color-scheme", "automatic");
      body.classList.toggle("light-mode", false);
      body.classList.toggle("dark-mode", true);
      break;
    }
    case "light": {
      if (!isDarkMode)
        window.sessionStorage.setItem("color-scheme", "automatic");
      body.classList.toggle("light-mode", true);
      body.classList.toggle("dark-mode", false);
      break;
    }
    case "automatic":
    default: {
      body.classList.toggle("light-mode", isDarkMode === false);
      body.classList.toggle("dark-mode", isDarkMode === true);
      break;
    }
  }
}
setTheme(window.matchMedia("(prefers-color-scheme: dark)"));
function toggleTheme() {
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = mql.matches;
  const colorScheme = window.sessionStorage.getItem("color-scheme");
  switch (colorScheme) {
    case "dark": {
      window.sessionStorage.setItem("color-scheme", isDarkMode ? "light" : "automatic");
      break;
    }
    case "light": {
      window.sessionStorage.setItem("color-scheme", isDarkMode ? "automatic" : "dark");
      break;
    }
    case "automatic":
    default: {
      window.sessionStorage.setItem("color-scheme", isDarkMode ? "light" : "dark");
      break;
    }
  }
  setTheme(mql);
}
var defaultTypeSetting = "mine-type-scheme";
function setType(querySelector, settingsKey = defaultTypeSetting) {
  const element = document.querySelector(querySelector);
  const desiredType = window.sessionStorage.getItem(settingsKey);
  element.classList.toggle("serif", desiredType === "serif");
  element.classList.toggle("round", desiredType === "round");
  element.classList.toggle("sans", desiredType === "sans");
}
setType("body");

// ../../../../.bun/install/global/node_modules/top-bun/lib/defaults/default.client.js
window.toggleTheme = toggleTheme;
//# sourceMappingURL=default.client.js-N4RJZJWN.js.map
