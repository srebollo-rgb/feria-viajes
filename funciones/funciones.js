//Ventana mensaje de bienveida//
function mostrarBienvenida() {
  alert("¡Bienvenido a Expo Travel La Rioja!");
}
//Opacidad 50%//
function opacidad() {
  document.getElementById("imagenSombrero").style.opacity = '0.5';
}
//Contador de visitas//
function incrementarContador() {
  // Guarda  valor en almacenamiento local.
  let contador = localStorage.getItem("visitas") || 0;
  contador = parseInt(contador) + 1;
  localStorage.setItem("visitas", contador);
  document.getElementById("contadorVisitas").textContent = contador;
}
// Llama a la función al cargar página.
window.onload = incrementarContador;

// Espera a que el documento esté completamente cargado para asegurarse de que el enlace existe
document.addEventListener('DOMContentLoaded', function confirmacion() {
    // Selecciona el enlace por su ID
    const enlace = document.getElementById('enlaceContacto');
    // Añade un "event listener" para el evento de clic
    enlace.addEventListener('click', function(evento) {
        // Muestra la ventana de confirmación
        const confirmacion = confirm('¿Desea ir al formulario de contacto?');
        if (!confirmacion) {
            evento.preventDefault();
        }
    });
});

//Para traducir una parte del formulario//
function traducirFormulario(){
  document.getElementById("parrafoIntroFormulario").innerHTML="If you have any doubt or question, fill in this form:";
}

