import scrollfuntion from "./dom/boton_scroll.js";
import contdown from "./dom/cuenta_regresiva.js";
import theme from "./dom/dark_theme.js";
import hamburgerMenu from "./dom/menu_hamburg.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import { digitalReloj,alarma } from "./dom/reloj.js";
import { moveBall,shortcuts } from "./dom/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalReloj("#reloj","#activar-reloj","#desactivar-reloj");
    alarma("../assets/perforar_1.mp3","#activar-alarma","#desactivar-alarma");
    // contdown("countdown","Sep 25,2022 00:00:00","Feliz cumpleaños 👀 ");
    scrollfuntion(".btn-scroll-top");
    responsiveMedia("youtube", "(min-width:1024px)", `<a href="https://www.youtube.com/embed/4xfXAtj9ge4">Ver video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/4xfXAtj9ge4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia("gmaps", "(min-width:1024px)", `<a href="https://goo.gl/maps/b6zLUb8XwWKP7t3u9">Ver mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.4739130447842!2d-74.17644898588011!3d11.22650665379594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f5ab98c16d5b%3A0x92f6b2c5092e19c7!2sCinemark%20Buenavista%20Santa%20Marta!5e0!3m2!1ses!2sco!4v1663368625092!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e,".ball", ".stage");
});

theme(".btn-dark-theme", "dark-mode");