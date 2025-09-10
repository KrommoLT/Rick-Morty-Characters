import Header from "../templates/Header.js";
import Home from "../pages/Home.js";
import Character from "../pages/Character.js";
import Error404 from "../pages/Error404.js";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
};

const router = async () => {
  const header = document.getElementById("header");
  const content = document.getElementById("content");
  if (header) {
    header.innerHTML = await Header();
  }
  if (content) {
    content.innerHTML = await Home(); // Renderiza la página principal
  }
};

export default router;
