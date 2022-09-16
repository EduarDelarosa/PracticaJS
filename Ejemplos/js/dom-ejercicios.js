import scrollfuntion from "./dom/boton_scroll.js";
import contdown from "./dom/cuenta_regresiva.js";
import theme from "./dom/dark_theme.js";
import hamburgerMenu from "./dom/menu_hamburg.js";
import { digitalReloj,alarma } from "./dom/reloj.js";
import { moveBall,shortcuts } from "./dom/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalReloj("#reloj","#activar-reloj","#desactivar-reloj");
    alarma("../assets/perforar_1.mp3","#activar-alarma","#desactivar-alarma");
    contdown("countdown","Sep 25,2022 00:00:00","Feliz cumpleaños 👀 ");
    scrollfuntion(".btn-scroll-top");
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e,".ball", ".stage");
});

theme(".btn-dark-theme", "dark-mode");