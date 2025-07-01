/**
 * Script para alternar el botón "+" y "-" cuando se expande o colapsa el contenido de los cards del index.html.
 * - Los botones deben tener la clase "btn-primary" y estar en un elemento "a".
 * - Cada botón debe tener el atributo "href" con el ID del contenido a colapsar.
 * - Usa eventos de Bootstrap "show.bs.collapse" y "hide.bs.collapse" para cambiar el texto.
 */

// Seleccionamos todos los botones con la clase "btn-primary" de un elemento "a"
const buttons = document.querySelectorAll('a.btn-primary');

buttons.forEach(btn => {
    // Obtenemos el ID del contenido asociado al botón
    const targetId = btn.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        // Cambiamos el texto del botón cuando se expande o se contrae el contenido
        targetElement.addEventListener("show.bs.collapse", function () {
            btn.textContent = "-";
        });

        targetElement.addEventListener("hide.bs.collapse", function () {
            btn.textContent = "+";
        });
    }
});