// Codigo lightbox 
document.addEventListener("DOMContentLoaded", function () {
    // Funçao para abrir o lightbox
    function openLightboxFromThumbnail(thumbnail) {
        const lightbox = document.getElementById('lightbox');
        const imageSrc = thumbnail.getAttribute('data-src');

        // Atribui o caminho da imagem à imagem do lightbox
        document.getElementById('lightboxImagem').src = imageSrc;

        // mostra o lightbox
        lightbox.style.display = 'block';
    }

    // Funçao para fechar o lightbox 
    function closeLightbox() {
        const lightbox = document.getElementById('lightbox');
        lightbox.style.display = 'none';
    }

    // Adiciona um evento de clique às miniaturas para abrir o lightbox
    const thumbnails = document.querySelectorAll('.images');

    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener('click', function () {
            openLightboxFromThumbnail(thumbnail);
        });
    });

    // Adiciona um evento de click a sobreposiçao do lightbox para fechar o lightbox
    const lightbox = document.getElementById('lightbox');
    lightbox.addEventListener('click', closeLightbox);
});

// Codigo mostrar mais
document.addEventListener("DOMContentLoaded", function () {
    const showMoreButtons = document.querySelectorAll('.show-more');
    const detalhesProjetos = document.querySelectorAll('.detalhes-projeto');

    // Adiciona um evento de click a todos os botões mostrar mais
    showMoreButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const detalhesProjeto = detalhesProjetos[index];

            // Adiciona uma transiçao entre mostrar e esconder o contéudo
            if (detalhesProjeto.style.maxHeight) {
                detalhesProjeto.style.maxHeight = null;
                button.textContent = 'Mostrar Mais ▼';
            } else {
                detalhesProjeto.style.maxHeight = detalhesProjeto.scrollHeight + 'px';
                button.textContent = 'Mostrar Menos ▲';
            }
        });
    });
});
