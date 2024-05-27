currentSlideID = 1;

sliderElement = document.getElementById('slider');
totalSlides = sliderElement.childElementCount;


let autoSlideInterval;

// Função para iniciar o slide automático
function startAutoSlide() {
    autoSlideInterval = setInterval(next, 5000); // Chama a função next() a cada 5 segundos (5000 milissegundos)
}

// Função para parar o slide automático
function stopAutoSlide() {
    clearInterval(autoSlideInterval); // Limpa o intervalo do slide automático
}

// Função para avançar para o próximo slide
function next() {
    if (currentSlideID < totalSlides) {
        currentSlideID++;
    } else {
        currentSlideID = 1;
    }
    showSlide();
}

// Função para retroceder para o slide anterior
function prev() {
    if (currentSlideID > 1) {
        currentSlideID--;
    } else {
        currentSlideID = totalSlides;
    }
    showSlide();
}

// Função para exibir o slide atual
function showSlide() {
    slides = document.getElementById('slider').getElementsByTagName('li');
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index];
        if (currentSlideID === index + 1) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    }
}

// Iniciar o slide automático quando a página carregar
window.onload = function() {
    startAutoSlide();
};

document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById('verMaisBtn');
    btn.addEventListener('click', toggleImages);
});

function toggleImages() {
    var extraImages = document.querySelectorAll('.extra-image');
    var btnText = document.getElementById('verMaisBtn');

    extraImages.forEach(function(image) {
        if (image.style.display === 'none') {
            image.style.display = 'block';
            btnText.textContent = 'Ver Menos';
        } else {
            image.style.display = 'none';
            btnText.textContent = 'Ver Mais';
        }
    });
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function sendMessage() {
    // Simula o envio do formulário (aqui você pode adicionar a lógica de envio real)
    // Supondo que a mensagem foi enviada com sucesso, mostramos a mensagem de sucesso
    document.getElementById('successMessage').classList.remove('hidden');
    
    // Rolamos a página para exibir a mensagem
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Opcional: você pode adicionar um timer para esconder a mensagem após alguns segundos
    setTimeout(function() {
        document.getElementById('successMessage').classList.add('hidden');
    }, 10000); // Esconde a mensagem após 5 segundos (5000 milissegundos)
}
