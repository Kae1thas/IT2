// Ожидание загрузки страницы
window.addEventListener("load", function () {
    this.setTimeout(() => {
        // Скрыть загрузчик
        const preloader = document.getElementById("preloader");
        if (preloader) {
            preloader.style.display = "none";
        }

        // Показать содержимое страницы с плавным эффектом
        const content = document.querySelector(".content");
        if (content) {
            content.style.display = "block";
            setTimeout(() => {
                content.style.opacity = 1;
            }, 100);
        }
    }, 750);
});
