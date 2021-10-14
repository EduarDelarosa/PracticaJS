// let texto = "Hola"
// const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto)); 

// hablar(texto);

/*console.log(window)
setTimeout(() => {
    console.log(document.getSelection().toString());
},3000);

document.write("<h2>Hola Mundo desde el DOOOOOOOOM :D</h2>")

console.log(document.querySelector(".link-dom").href)


const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https:/google.com");
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data Attribute
console.log($linkDOM.getAttribute("data-description"));*/

//Variable CSS - Custom Properties CSS
/*const $html = document.documentElement,
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
    varYellow = getComputedStyle($html).getPropertyValue("--yellow-color");

    console.log(varDarkColor,varYellow);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellow;

const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));*/

/*const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
      El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
      Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
      <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
  `;

  //$whatIsDOM.innerText = text; Esta opcion era utilizada con internet explorel, ya no es parte del estandar
  //$whatIsDOM.textContent = text; Esta propiedad solo agrega texto   
  $whatIsDOM.innerHTML = text;
  //$whatIsDOM.outerHTML = text; esta propiedad reemplaza la etiqueta seleccionada


  //Recorriendo el DOM 

  /*const $cards = document.querySelector(".cards");

  console.log($cards.children);*/

  /*const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards"),
  $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;
$figure2.classList.add("card");

$cards.appendChild($figure2);

const estaciones = ["Primavera","Verano", "Otoño", "Invierno"];

const $ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el)=>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
} );*/

//Template HTML
/*const $card=document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

  cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
  });

  $card.appendChild($fragment);

  console.log($card)


  //Manejo de eventos

 /* function holaMundo(){
    alert("Hola mundo");
    console.log(event);
  }

  const $eventoSemantico = document.getElementById("evento-semantico");
  const $eventoMultiple = document.getElementById("evento-multiple");
  const $eventoRemover = document.getElementById("evento-remover");

  $eventoSemantico.onclick = holaMundo;
  $eventoSemantico.onclick = function(e){
    alert("Hola Mundo Manejador de envento semantico");
    console.log(e)
  }

  $eventoMultiple.addEventListener("click", holaMundo);
  $eventoMultiple.addEventListener("click", (e)=>{
    alert("Hola Mundo segundo evento")
    console.log(e.target)
    console.log(e.type)
  });

  function saludar(nombre = "Desconocido"){
    alert(`Hola ${nombre}`)
  }

  $eventoMultiple.addEventListener("click", ()=>{
    saludar();
    saludar("Eduardo");
  });

  const removerEvento = (e) =>{
    alert(`Removiendo evento de tipo ${e.type}` )
    console.log(e)
    $eventoRemover.removeEventListener("dblclick", removerEvento);
    $eventoRemover.disabled = true;
  }

  $eventoRemover.addEventListener("dblclick", removerEvento)*/

  /*function flujoEventos(e){
    console.log(`Hola te saluda ${this},el click lo origino ${e.target.className}`)
    e.stopPropagation();
  }*/

  /*const $divEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");

  console.log($divEventos);

  $divEventos.forEach((div)=>{
    //Fase de burbuja
    div.addEventListener("click", flujoEventos);
    //div.addEventListener("click", flujoEventos, false);
    //Fase de captura
    //div.addEventListener("click", flujoEventos, true);
  //   div.addEventListener("click", flujoEventos, {
  //     capture: false,
  //     once: true,
  //  });
  });

  $linkEventos.addEventListener("click", (e) => {
    alert("Hola otra vez :d");
    e.preventDefault();
    e.stopPropagation();
  });*/

  /*document.addEventListener("click", (e) => {
    console.log(e.target);
    
    if(e.target.matches(".eventos-flujo div")){
      flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){
      alert("Hola otra vez :d");
      e.preventDefault();
    }
  });*/

  /*window.addEventListener("resize", (e) => {
    console.clear();
    console.log("********** Evento Resize **********");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
  });
  
  window.addEventListener("scroll", (e) => {
    console.clear();
    console.log("********** Evento Scroll **********");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
  });*/

  /*window.addEventListener("load", (e) => {
    console.log("********** Evento Load **********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
  });

  document.addEventListener("DOMContentLoaded", (e) => {
    console.log("********** Evento DOMContentLoaded **********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
  });*/

  /*const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

  let ventana;

  $btnAbrir.addEventListener("click",e => {
    ventana = open("https://www.google.com")
  });

  $btnCerrar.addEventListener("click",e => {
    ventana.close();
  });

  $btnImprimir.addEventListener("click",e => {
    print();// nos permite imprimir un screen de la pantalla o descargarla en formato pdf :O
  });*/


  /*console.log("********** Objeto URL (location) **********");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
//location.reload();*/

// console.log("********** Objeto Historial (history) **********");
// console.log(history);
// console.log(history.length);
// //history.forward(1);
// //history.go(-3);
// //history.back(2);

// console.log("********** Objeto Navegador (navigator) **********");
// console.log(navigator);
// console.log(navigator.connection);
// console.log(navigator.geolocation);
// console.log(navigator.mediaDevices);
// console.log(navigator.mimeTypes);
// console.log(navigator.onLine);
// console.log(navigator.serviceWorker);
// console.log(navigator.storage);
// console.log(navigator.usb);
// console.log(navigator.userAgent);





















