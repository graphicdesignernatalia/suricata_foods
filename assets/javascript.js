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
<<<<<<< HEAD
                // Obtiene la altura del navbar para descontarla del scroll
                const navbarHeight = document.querySelector('.navbar').offsetHeight;

                // Desplazamiento suave hacia el elemento destino
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight, // Resta la altura del navbar
                    behavior: "smooth"
=======
                // Desplazamiento suave hacia el elemento destino
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start" // Alinea el inicio del elemento al inicio del viewport
>>>>>>> e8a4699f2548ef9c3e5ddfe5cd9d9b01315b0ffe
                });
            }
        });
    });
<<<<<<< HEAD
});

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const productosSection = document.querySelector('#productos');
    const navbar = document.querySelector('.navbar');

    navbarToggler.addEventListener('click', function() {
        const navbarHeight = navbar.offsetHeight; // Obtén la altura actual del navbar

        // Si el menú está desplegado, ajusta el margen superior
        if (productosSection.style.marginTop === '100px') {
            productosSection.style.marginTop = '0px'; // Valor cuando el menú está cerrado
        } else {
            productosSection.style.marginTop = `${navbarHeight}px`; // Ajusta el valor al abrir el menú
        }
    });
});

=======
});
>>>>>>> e8a4699f2548ef9c3e5ddfe5cd9d9b01315b0ffe
