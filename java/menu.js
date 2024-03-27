$(document).ready(function(){
  // Manejo del evento de clic para el enlace "Cerrar Sesión"
  $("a.nav-link[href='#']").click(function(event){
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    // Aquí puedes agregar el código para cerrar la sesión
    alert("Se ha cerrado la sesión");
  });
});
