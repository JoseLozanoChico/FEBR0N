const secciones = document.querySelectorAll(".seccion");
const botones = document.querySelectorAll("nav a");

function ocultarSecciones(){

  secciones.forEach(sec => {
    sec.style.display = "none";
  });

}

function mostrarSeccion(id){

  ocultarSecciones();

  const seccion = document.querySelector(id);

  if(seccion){
    seccion.style.display = "block";
  }

}

botones.forEach(boton => {

  boton.addEventListener("click", (e) => {

    e.preventDefault();

    const destino = boton.getAttribute("href");

    mostrarSeccion(destino);

  });

});

mostrarSeccion("#inicio");

const fotos = [

  "https://i.ytimg.com/vi/Y5-s97eew6c/maxresdefault.jpg"

];

let fotoActual = 0;

setInterval(() => {

  fotoActual++;

  if(fotoActual >= fotos.length){
    fotoActual = 0;
  }

  document.getElementById("fotoStreamer").src = fotos[fotoActual];

}, 4000);