import { App } from "./App.js";
import api from "./helpers/wp_api.js";
document.addEventListener("DOMContentLoaded", () => {
  api.page = 1;
  App();
});
window.addEventListener("hashchange", () => {
  App();
});
