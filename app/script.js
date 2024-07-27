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
    const thumbnails = document.querySelectorAll('.image img');

    thumbnails.forEach(function (thumbnail) {
        thumbnail.addEventListener('click', function () {
            openLightboxFromThumbnail(thumbnail);
        });
    });

    // Adiciona um evento de click a sobreposiçao do lightbox para fechar o lightbox
    const lightbox = document.getElementById('lightbox');
    lightbox.addEventListener('click', closeLightbox);


    // Código mostrar mais:
    const showMoreButtons = document.querySelectorAll('.show-more');
    const detalhesProjetos = document.querySelectorAll('.details-project');

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

    // Código Typed:
    var typed = new Typed(".typed-text", {
        strings: ["Desenvolver Web Frontend"],
        typeSpeed: 120,
        backSpeed: 100,
        backDelay: 1000,
    });


    // recupera todas os links no navbar
    const navlinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');
    let isScrollingByLink = false

    // percorre todas os links e adicionar um evento de clique a cada um
    navlinks.forEach(link => {
        link.addEventListener('click', function () {
            // remove a classe active de todos os links
            navlinks.forEach(item => item.classList.remove('active'))

            // Adiciona a classe active ao link clicado
            this.classList.add('active')

            isScrollingByLink = true;
            setTimeout(() => {
                isScrollingByLink = false
                console.log(`${isScrollingByLink}`)
            }, 1000);
        })
    })


    // Código de automatizaçao de active menu de navegaçao:
    function changeActiveLink() {
        if (isScrollingByLink) return; // Se a flag for true, interrompe a função
        let index = sections.length;

        while (--index && window.scrollY + 100 < sections[index].offsetTop) { }

        navlinks.forEach((link) => link.classList.remove('active'));
        navlinks[index].classList.add('active');
    }

    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);
});
