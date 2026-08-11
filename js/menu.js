const toggle = document.querySelector(".nav_toggle");// Busca el botón hamburguesa del menú
const menu = document.querySelector(".nav_items");// Busca el menú de navegación
console.log(toggle);// Muestra el botón hamburguesa en la consola
console.log(menu);// Muestra el menú en la consola
// Agregamos el evento al botón hamburguesa
//Activa y desactiva el menú cuando hacés clic en el botón hamburguesa
toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
    toggle.classList.toggle("active");
});

// Cerrar el menú al hacer clic en una opción
const enlaces = document.querySelectorAll(".nav_items a");//busca todos los enlaces que están dentro de .nav_items.

// Recorre cada uno de los enlaces del menú
enlaces.forEach(enlace => {
       // Agrega un evento cuando hacemos clic en un enlace
    enlace.addEventListener("click", () => {
        // Quita la clase "open" y cierra el menú
        menu.classList.remove("open");
         // Quita la clase "active" del botón hamburguesa
        toggle.classList.remove("active");
    });
});