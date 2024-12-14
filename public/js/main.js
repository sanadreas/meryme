// Initialize Swiper
const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    spaceBetween: 20,
});

// Открыть фото в модальном окне
function openImage(src) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    modal.style.display = "flex"; // Показываем модальное окно
    modalImg.src = src; // Устанавливаем путь к изображению
}

// Закрыть модальное окно
function closeImage() {
    const modal = document.getElementById("image-modal");
    modal.style.display = "none"; // Скрываем модальное окно
}

// Анимация появления секций
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.getElementById("play-music").addEventListener("click", function () {
    const music = document.getElementById("background-music");

    // Проверяем, что музыка доступна и не заблокирована
    if (music.paused) {
        music.play().then(() => {
            console.log("Музыка запущена!");
        }).catch((err) => {
            console.error("Ошибка воспроизведения музыки:", err);
        });
    }

    // Скрываем кнопку после старта музыки
    this.style.display = "none";
});

// Функция для создания фиксированного количества объектов
function initializeFallingDecor() {
    const container = document.querySelector('.falling-decor');
    const symbols = ['✨', '❤️', '💖', '⭐']; // Символы для анимации
    const maxDecor = 30; // Фиксированное количество объектов

    for (let i = 0; i < maxDecor; i++) {
        const decor = document.createElement('span');
        decor.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        decor.style.left = Math.random() * 100 + 'vw';
        decor.style.animationDuration = Math.random() * 5 + 5 + 's'; // Длительность падения
        decor.style.fontSize = Math.random() * 10 + 20 + 'px'; // Размеры от 20 до 30 пикселей
        decor.style.opacity = Math.random() * 0.4 + 0.3; // Прозрачность от 0.3 до 0.7
        decor.style.position = 'absolute';
        decor.style.top = '-10%'; // Начинаем сверху
        decor.classList.add('falling');
        container.appendChild(decor);

        // Сбрасываем положение после анимации
        decor.addEventListener('animationend', () => {
            decor.style.left = Math.random() * 100 + 'vw';
            decor.style.animationDuration = Math.random() * 5 + 5 + 's';
        });
    }
}

// Вызываем при загрузке
initializeFallingDecor();
