// carrousel
const imagenes = document.querySelectorAll('.carrousel-inner img'); // Selecciona todas las imágenes dentro del carrousel
let indiceActual = 0;

setInterval(() => {                 // Cambia la imagen cada 3 segundos
  console.log(indiceActual);        // Muestra en la consola el índice de la imagen actual
  imagenes[indiceActual].classList.remove('active');    // Quita la clase 'active' de la imagen actual
  imagenes[indiceActual].classList.add('inactive');     // Agrega la clase 'inactive' a la imagen actual
  indiceActual = (indiceActual + 1) % imagenes.length;  // Incrementa el índice de la imagen actual
  imagenes[indiceActual].classList.add('active');       // Agrega la clase 'active' a la nueva imagen
  imagenes[indiceActual].classList.remove('inactive');  // Quita la clase 'inactive' de la nueva imagen
}, 3000);   // Cambia la imagen cada 3 segundos

let hidetext_btn = document.getElementById("hidetext_btn"); // Selecciona el botón

hidetext_btn.addEventListener("click", toggleText);         // Agrega un evento de clic al botón
function toggleText() {                                     // Define la función toggleText
    hide_text.classList.toggle("show");                      // Agrega o elimina la clase 'show' de la sección
    if (hide_text.classList.contains("show")) {              // Verifica si la sección tiene la clase 'show'
        hidetext_btn.textContent = "Read Less";              // Cambia el texto del botón
    } else {
        hidetext_btn.textContent = "Read More";              // Cambia el texto del botón
    }
}  


let hide_text = document.getElementById("hide_text");       // Selecciona el texto a ocultar
