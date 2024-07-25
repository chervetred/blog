$(document).ready(function() {
    // Настройки увеличения изображений с Medium Zoom
    mediumZoom('.post-image-wrapper img', {
        background: 'rgba(0, 0, 0, 0.7)'
    });

    // Плавная прокрутка наверх при клике на стрелку
    $('.back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    // Показать/скрыть стрелку прокрутки наверх в зависимости от положения прокрутки
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    // Открытие поста при клике на "читать далее"
    $('.post-footer .read-more').click(function() {
        var postUrl = $(this).data('url');
        window.open(postUrl, '_blank');
    });

    // Показать/скрыть подменю при клике на пункт меню
    $('.menu-link.has-submenu').click(function(e) {
        e.preventDefault(); // Предотвращаем переход по ссылке

        var $submenu = $(this).siblings('.sub-menu');

        if ($submenu.is(':visible')) {
            // Если подменю видно, скрываем его
            $submenu.slideUp(); // Используем slideUp для скрытия
        } else {
            // Если подменю скрыто, показываем его
            $submenu.slideDown(); // Используем slideDown для показа
        }
    });
});




window.onload = function() {
    const canvas = document.getElementById('blur-canvas');
    const img = document.getElementById('main-image');
    const ctx = canvas.getContext('2d');

    // Функция для настройки размеров canvas в соответствии с размерами изображения
    function resizeCanvas() {
        canvas.width = img.clientWidth;
        canvas.height = img.clientHeight;
    }

    // Функция для создания размытого фона на основе изображения
    function drawBlurredBackground() {
        const image = new Image();
        image.src = img.src;
        image.onload = function() {
            resizeCanvas();
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
    }

    // Обновляем canvas при изменении размеров окна
    window.addEventListener('resize', resizeCanvas);
    // Первоначальная настройка
    drawBlurredBackground();
};

/*фон*/
document.addEventListener('DOMContentLoaded', function() {
    twallpaper('#wallpaper', {
        fps: 60,
        tails: 90,
        animate: false,
        scrollAnimate: true,
        colors: [
            "#ffb0e2",
            "#da389e",
            "#d71991",
            "#e2b8d2"
        ],
        pattern: {
            image: "https://twallpaper.js.org/patterns/cats_and_dogs.svg",
            background: "#000",
            blur: 0,
            size: "420px",
            opacity: 0.5,
            mask: true
        }
    });
});
