document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-image");
    let currentIndex = 0;
    const intervalTime = 5000; // Tiempo en milisegundos (5 segundos)

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    document.querySelector(".prev-button").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    document.querySelector(".next-button").addEventListener("click", function () {
        showNextImage(); // Usa la función para avanzar la imagen
    });

    // Inicialmente, muestra la primera imagen
    showImage(currentIndex);

    // Cambia la imagen cada 5 segundos
    setInterval(showNextImage, intervalTime);
});
