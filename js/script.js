const button1 = document.getElementById("siguiente1");
const button2 = document.getElementById("siguiente2");
const button3 = document.getElementById("siguiente3");
const button4 = document.getElementById("siguiente4");

const usuario = document.getElementById("usuario");
const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");

const nombre = document.getElementById("nombre");

const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
const container4 = document.getElementById("container4");

const pasos = [container1, container2, container3, container4];

function pasoSiguiente(index) {
  pasos.forEach((paso, i) => {
    paso.classList.toggle("hidden", i !== index);
  });
}
    button1.addEventListener("click", () => {
        pasoSiguiente(1);   
    });
    button2.addEventListener("click", () => {
        pasoSiguiente(2);   
    });
    button3.addEventListener("click", () => {
        pasoSiguiente(3);
    });




