/* Referencias a los elementos del DOM (Document Object Model) */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Abrir el menu al hacer clic en el boton toggle */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      /* Agrega la clase CSS que mueve el menu hacia adentro de la pantalla */
      navMenu.classList.add('show-menu')
   })
}

/* Cerrar el menu al hacer clic en el icono de la X */
if(navClose){
   navClose.addEventListener('click', () =>{
      /* Elimina la clase CSS para ocultar el menu nuevamente */
      navMenu.classList.remove('show-menu')
   })
}