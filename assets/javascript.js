document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los enlaces con hash (#) en el menú
    const links = document.querySelectorAll('a[href^="#"]');

    // Itera sobre cada enlace
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Previene el comportamiento predeterminado del enlace

            const targetId = this.getAttribute("href"); // Obtiene el ID del destino
            const targetElement = document.querySelector(targetId); // Selecciona el elemento destino

            if (targetElement) {
                // Desplazamiento suave hacia el elemento destino
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start" // Alinea el inicio del elemento al inicio del viewport
                });
            }
        });
    });
});